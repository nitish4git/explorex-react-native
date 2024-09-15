import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useNavigation } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' , headerShown: false  }}>
      <Tabs.Screen
        name="Index"
        options={{
          title: 'MyTrip',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} options={{ href: null }}/>,
        }}
      />
      <Tabs.Screen
        name="Expenses"
        options={{
          title: 'Expenses',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
       <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
