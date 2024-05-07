import { defineStore } from 'pinia';

interface Motorcycle {
  type: string;
  name: string;
  oneHourRental: string;
  rentalDay: string;
  deposit: string;
  imageUrl: string;
}

interface MotorcyclesState {
  motorcycles: Motorcycle[];
  isLoading: boolean;
  error: string | null;
}

export const useMotorcyclesStore = defineStore({
  id: 'motorcycles',
  state: (): MotorcyclesState => ({
    motorcycles: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchMotorcycles() {
      console.log('Fetching motorcycles...');
      this.isLoading = true;
      this.error = null;
    
      try {
        const response = await fetch('http://localhost:3001/motorcycles');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        this.motorcycles = data;
        console.log('Motorcycles fetched:', this.motorcycles);
      } catch (error: any) {
        console.error('Fetch error:', error);
        if (error instanceof Error) {
          this.error = error.message;
        } else {
          this.error = 'An unknown error occurred';
        }
      } finally {
        this.isLoading = false;
      }
    },    
  },
});
