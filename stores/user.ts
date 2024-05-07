import { defineStore } from 'pinia';
interface User {
  full_name: string;
  address: string;
  drivers_license: string;
  issued_in: string;
  phone: string;
  email: string;
}

interface UserState {
  user: User;
  isLoading: boolean;
  error: string | null;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    user: {} as User,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchUser(accessToken: string | null) {
      const router = useRouter();
      if (accessToken) {

        console.log('Fetching user...');
        this.isLoading = true;
        this.error = null;
  
        const headers = {
          Authorization: `Bearer ${accessToken}`
        }
      
        try {
          const response = await fetch('http://localhost:3001/get_user', { headers, method: 'GET',});
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
      
          const data = await response.json();
          this.user = data;
          console.log('User fetched:', this.user);
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
      } else {
        router.push('/');
      }
    },    
  },
});
