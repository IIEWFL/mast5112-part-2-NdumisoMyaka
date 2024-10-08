import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Christoffel</Text>

      <Text style={styles.subtitle}>Chef and Creator</Text>
      <Text style={styles.bio}>
        Christoffel is a passionate chef with years of experience in the culinary world.
        Growing up in a family that cherished home-cooked meals, he developed a love for
        cooking at an early age. His culinary journey has taken him through various kitchens,
        where he honed his skills and explored diverse cuisines.
      </Text>

      <Text style={styles.subtitle}>Mission</Text>
      <Text style={styles.mission}>
        The mission behind this application is to provide an easy-to-use platform for clients
        to access a variety of meal options tailored to their preferences. Christoffel aims
        to enhance the dining experience by allowing users to customize their meals effortlessly.
      </Text>

      <Text style={styles.subtitle}>Vision</Text>
      <Text style={styles.vision}>
        Christoffel envisions a world where everyone can enjoy delicious, personalized meals
        at their fingertips. By leveraging technology, he hopes to bridge the gap between chefs
        and diners, making culinary experiences more accessible and enjoyable for all.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a0dad',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#6a0dad',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#6a0dad',
  },
  mission: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#6a0dad',
  },
  vision: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#6a0dad',
  },
});

export default AboutUsScreen;