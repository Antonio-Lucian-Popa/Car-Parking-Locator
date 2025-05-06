import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';
import { LocationService } from './services/location.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  carLocation: { latitude: number; longitude: number } | null = null;

  constructor(
    private locationService: LocationService,
    private toastController: ToastController
  ) {}

  ngAfterViewInit() {
    if (this.carLocation) {
      const map = L.map('map').setView(
        [this.carLocation.latitude, this.carLocation.longitude], 16
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([this.carLocation.latitude, this.carLocation.longitude]).addTo(map);
    }
  }

  async ngOnInit() {
    this.carLocation = await this.locationService.getSavedLocation();
  }

  async saveLocation() {
    try {
      const coords = await this.locationService.getCurrentCoordinates();
      await this.locationService.saveLocation(coords);
      this.carLocation = coords;
      this.showToast('Locația a fost salvată cu succes.');
    } catch (error) {
      this.showToast('Eroare la obținerea locației.');
    }
  }

  async openInMaps() {
    if (!this.carLocation) {
      this.showToast('Nu ai salvat nicio locație.');
      return;
    }
    const { latitude, longitude } = this.carLocation;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
  }

  getStaticMapUrl(): string {
    if (!this.carLocation) return '';
    const { latitude, longitude } = this.carLocation;
    return `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=17&size=600x300&markers=${latitude},${longitude},red`;
  }


  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'primary',
    });
    toast.present();
  }

}
