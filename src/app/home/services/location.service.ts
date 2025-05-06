import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async getCurrentCoordinates(): Promise<{ latitude: number; longitude: number }> {
    const position = await Geolocation.getCurrentPosition();
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  }

  async saveLocation(coords: { latitude: number; longitude: number }) {
    await this.storage.set('carLocation', coords);
  }

  async getSavedLocation(): Promise<{ latitude: number; longitude: number } | null> {
    return await this.storage.get('carLocation');
  }
}
