import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';


export default function Layout() {
  return (
    <Provider store={store}>
     <Stack screenOptions={{ headerShown: false }} />

    </Provider>
  );
}
