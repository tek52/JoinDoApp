import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


enableScreens();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainApp />
    </GestureHandlerRootView>
  );
};

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// EventCard
type EventCardProps = {
  image: ImageSourcePropType;
  title: string;
  date: string;
  time: string;
  avatars: ImageSourcePropType[];
};

const EventCard: React.FC<EventCardProps> = ({ image, title, date, time, avatars }) => {

  const maxAvatarsToShow = 4;

  return (
    <TouchableOpacity style={styles.eventBox}>
      <Image source={image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <View style={styles.eventTitleRow}>
          <Text style={styles.eventTitle}>{title}</Text>
          <View style={styles.joinContainer}>
            <Icon name="users" size={24} color="#007BFF" style={styles.joinIcon} />
            <Text style={styles.joinText}>Click to Join</Text>
          </View>
        </View>
        <Text style={styles.eventInfo}>📅 {date}</Text>
        <Text style={styles.eventInfo}>⏰ {time}</Text>
        <View style={styles.avatarsContainer}>
          {avatars.slice(0, maxAvatarsToShow).map((avatar, index) => (
            <Image key={index} source={avatar} style={styles.avatar} />
          ))}
          {avatars.length > maxAvatarsToShow && (
            <View style={styles.moreAvatars}>
              <Text style={styles.moreAvatarsText}>+{avatars.length - maxAvatarsToShow}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

// Profile Screen Interface
const ProfileScreen: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const profilePhotoTranslateY = scrollY <= 150 ? -50 + (scrollY / 200) * 50 : 0;
  const profilePhotoScale = scrollY <= 150 ? 1.25 - (scrollY / 400) * 0.5 : 1;
  const headerBackgroundColor = scrollY <= 150 ? `rgba(17, 26, 44, ${scrollY / 150})` : '#111A2C';

  const handleScroll = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    setScrollY(offsetY);
  };

  function handleMenuPress(arg0: string): void {
    console.log(`${arg0} pressed`);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
        <Image source={require('./assets/logo2.png')} style={styles.fixedLogo} />
      </View>
      <ScrollView
        style={styles.profileContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >


<View style={styles.container}>
  <Animated.Image
    source={require('./assets/profile.png')}
    style={[
      styles.profilePhoto,
      {
        transform: [
          { scale: profilePhotoScale },
          { translateY: profilePhotoTranslateY },
        ],
      },
    ]}
    resizeMode="cover"
  />

  <View style={styles.textOverlay}>
    <Text style={styles.profileName}>Enes, 32</Text>
    <Text style={styles.profileUsername}>@tekon52</Text>
    <Text style={styles.profileLocation}>Ankara, Turkey</Text>
  </View>

  <View style={styles.sportsIconsContainer}>
    <Image source={require('./assets/basketball1.png')} style={styles.sportIcon} />
    <Image source={require('./assets/badminton1.png')} style={styles.sportIcon} />
    <Image source={require('./assets/football.png')} style={styles.sportIcon} />
  </View>
</View>
   

        <View style={styles.yellowArea}>
          <View style={styles.yellowTextContainer}>
            <Text style={styles.yellowNumber}>3</Text>
            <Text style={styles.yellowText}>Sportmentlik</Text>
          </View>
          <View style={styles.yellowTextContainer}>
            <Text style={styles.yellowNumber}>5</Text>
            <Text style={styles.yellowText}>Etkinlikler</Text>
          </View>
          <View style={styles.yellowTextContainer}>
            <Text style={styles.yellowNumber}>12</Text>
            <Text style={styles.yellowText}>Do Friends</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Favori Sporlarım')}
          >
            <Image source={require('./assets/favorite.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Favori Sporlarım</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Profili Düzenle')}
          >
            <Image source={require('./assets/edit.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Profili Düzenle</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Hesap Ayarları')}
          >
            <Image source={require('./assets/settings.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Hesap Ayarları</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Sözleşmeler')}
          >
            <Image source={require('./assets/agreement.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Sözleşmeler</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Yaşadığın Bölgeyi Seç')}
          >
            <Image source={require('./assets/location.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Yaşadığın Bölgeyi Seç</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Premium Abonelik')}
          >
            <Image source={require('./assets/bell.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Premium Abonelik</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Çıkış')}
          >
            <Image source={require('./assets/exit.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>Çıkış</Text>
            <Icon name="chevron-right" size={18} color="#777" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

// Home Screen Interface
const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Etkinler');

  return (
    <View style={styles.container}>
   
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo1.png')} style={styles.logo} />
      </View>


      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log('Search Pressed')}>
          <Icon name="search" size={24} color="#111A2C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notifications Pressed')}>
          <Icon name="bell-o" size={24} color="#111A2C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Messages Pressed')}>
          <Icon name="comment-o" size={24} color="#111A2C" />
        </TouchableOpacity>
      </View>

      {/* Tabs: Etkinler, Gruplar, Takımlar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Etkinler')} style={styles.tabButton}>
          <Text style={activeTab === 'Etkinler' ? styles.activeTab : styles.tab}>Etkinler</Text>
          {activeTab === 'Etkinler' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Gruplar')} style={styles.tabButton}>
          <Text style={activeTab === 'Gruplar' ? styles.activeTab : styles.tab}>Gruplar</Text>
          {activeTab === 'Gruplar' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Takımlar')} style={styles.tabButton}>
          <Text style={activeTab === 'Takımlar' ? styles.activeTab : styles.tab}>Takımlar</Text>
          {activeTab === 'Takımlar' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {activeTab === 'Etkinler' && (
          <View>
            <EventCard
              image={require('./assets/basketball.png')}
              title="Basketbol"
              date="2024-09-01"
              time="14:00"
              avatars={[
                require('./assets/avatar1.png'),
                require('./assets/avatar2.png'),
                require('./assets/avatar3.png'),
                require('./assets/avatar4.png'),
                require('./assets/avatar5.png'),
                require('./assets/avatar6.png'),
                require('./assets/avatar7.png'),
                require('./assets/avatar8.png'),
              ]}
            />
            <EventCard
              image={require('./assets/voleyball.png')}
              title="Voleybol"
              date="2024-09-02"
              time="16:00"
              avatars={[
                require('./assets/avatar2.png'),
                require('./assets/avatar9.png'),
                require('./assets/avatar6.png'),
                require('./assets/avatar5.png'),
                require('./assets/avatar8.png'),
                require('./assets/avatar5.png'),
                require('./assets/avatar6.png'),
              ]}
            />
            <EventCard
              image={require('./assets/tennis.png')}
              title="Tenis"
              date="2024-09-03"
              time="10:00"
              avatars={[
                require('./assets/avatar1.png'),
                require('./assets/avatar4.png'),
                require('./assets/avatar5.png'),
                require('./assets/avatar16.png'),
                require('./assets/avatar15.png'),
                require('./assets/avatar24.png'),
              ]}
            />
            <EventCard
              image={require('./assets/badminton.png')}
              title="Badminton"
              date="2024-09-04"
              time="11:00"
              avatars={[
                require('./assets/avatar5.png'),
                require('./assets/avatar8.png'),
                require('./assets/avatar9.png'),
                require('./assets/avatar5.png'),
                require('./assets/avatar10.png'),
                require('./assets/avatar11.png'),
                require('./assets/avatar12.png'),
              ]}
            />
            <EventCard
              image={require('./assets/soccer.png')}
              title="Futbol"
              date="2024-09-05"
              time="18:00"
              avatars={[
                require('./assets/avatar1.png'),
                require('./assets/avatar2.png'),
                require('./assets/avatar3.png'),
                require('./assets/avatar4.png'),
                require('./assets/avatar18.png'),
                require('./assets/avatar17.png'),
                require('./assets/avatar19.png'),
              ]}
            />
            <EventCard
              image={require('./assets/squash.png')}
              title="Squash"
              date="2024-09-06"
              time="15:00"
              avatars={[
                require('./assets/avatar3.png'),
                require('./assets/avatar4.png'),
                require('./assets/avatar13.png'),
                require('./assets/avatar14.png'),
                require('./assets/avatar21.png'),
                require('./assets/avatar7.png'),
              ]}
            />
          </View>
        )}
      </ScrollView>

      {/* + Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => console.log('+ Create Pressed')}>
        <Text style={styles.createButtonText}>+ Create</Text>
      </TouchableOpacity>
    </View>
  );
};

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();

const MainApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#111A2C',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingLeft: 20,   
  },
  
  fixedLogo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    top: 20,
    
  },
  homeText: {
    fontSize: 20,
    color: '#111A2C',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#111A2C',
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  profilePhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '110%',
  },

  textOverlay: {
    position: 'absolute',
    top: 70, 
    left: 5, 
    right: 20, 
  },

  profileName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 365,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    
  },
  profileUsername: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    
  },
  profileLocation: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  sportsIconsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    
  },
  sportIcon: {
    width: 60,
    height: 85,
    marginHorizontal: -8,
    paddingLeft: 10,
    marginTop: 500,
    
  },
  yellowArea: {
    backgroundColor: 'yellow',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginVertical: 18,
  },
  yellowTextContainer: {
    alignItems: 'center',
    
  },
  yellowText: {
    fontSize: 16,
    color: '#111A2C',
    fontWeight: 'bold',
    
    
  },
  yellowNumber: {
    fontSize: 22,
    color: '#111A2C',
    fontWeight: '900',
    marginBottom: 5,
    
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#ddd',
    
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 120,
    height: 80,
    
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    
  },
  iconsContainer: {
    position: 'absolute',
    top: 65,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 120,
  },
  tabButton: {
    alignItems: 'center',
  },
  tab: {
    fontSize: 18,
    color: '#111A2C',
  },
  activeTab: {
    fontSize: 18,
    color: '#111A2C',
    fontWeight: 'bold',
  },
  activeIndicator: {
    width: '50%',
    height: 2,
    backgroundColor: '#111A2C',
    marginTop: 4,
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  eventBox: {
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  eventDetails: {
    padding: 15,
  },
  eventTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111A2C',
    marginBottom: 5,
    
  },
  joinContainer: {
    alignItems: 'center',
  },
  joinText: {
    fontSize: 14,
    color: '#007BFF',
  },
  joinIcon: {
    marginTop: 5,
  },
  eventInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 3,
  },
  moreAvatars: {
    backgroundColor: '#ddd',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreAvatarsText: {
    fontSize: 16,
    color: '#111A2C',
    fontWeight: 'bold',
  },
  createButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -70 }],
    backgroundColor: '#111A2C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111A2C',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },

  arrowIcon: {
    marginRight: 10,
    color: '#f0f0f0',
  },
});

export default MainApp;


