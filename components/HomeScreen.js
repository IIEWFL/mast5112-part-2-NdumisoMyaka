import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  //Data for meals with prices and images
  const meals = [
    { id: 1, name: 'Steak', course: 'Mains', price: 250, image: require('../Images/Image 1.jpg') },
    { id: 2, name: 'Caesar Salad', course: 'Starters', price: 100, image: require('../Images/Image 2.jpg') },
    { id: 3, name: 'Chocolate Cake', course: 'Desserts', price: 80, image: require('../Images/Image 3.jpg') },
    { id: 4, name: 'Red Wine', course: 'Drinks', price: 50, image: require('../Images/Image 4.jpg') },
    
  ];

  // keep track of selected meals
  const [selectedMeals, setSelectedMeals] = useState([]);

  
  const toggleMealSelection = (meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter(m => m !== meal));
    } else if (selectedMeals.length < 4) {
      setSelectedMeals([...selectedMeals, meal]);
    } else {
      alert("You can only select up to 4 meals.");
    }
  };

  // Calculate average prices for each course
  const calculateAveragePrices = () => {
    if (selectedMeals.length === 0) return {}; 

    const courses = {};

    selectedMeals.forEach(meal => {
      if (!courses[meal.course]) {
        courses[meal.course] = { totalPrice: 0, count: 0 };
      }
      courses[meal.course].totalPrice += meal.price;
      courses[meal.course].count += 1;
    });

    // Calculate average prices
    const averagePrices = {};
    for (const [course, data] of Object.entries(courses)) {
      averagePrices[course] = (data.totalPrice / data.count).toFixed(2); 
    }

    return averagePrices;
  };

  const averagePrices = calculateAveragePrices();

  return (
    <View style={styles.container}>
      {/* Navigation Links */}
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CoursesScreen')}>
          <Text style={styles.navLink}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
          <Text style={styles.navLink}>About Us</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image style={styles.logo} source={require('../Images/Logo.png')} />

      {/* Average Prices Section */}
      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceTitle}>Average Prices by Course:</Text>
        {Object.entries(averagePrices).length === 0 ? (
          <Text>No meals selected yet.</Text>
        ) : (
          Object.entries(averagePrices).map(([course, avgPrice]) => (
            <Text key={course} style={styles.averagePriceText}>
              {course}: R{avgPrice}
            </Text>
          ))
        )}
      </View>

      {/* Total Number of Menu Items */}
      <Text style={styles.totalItemsText}>Total Menu Items Available: {meals.length}</Text>

      {/* Title for Image Selection */}
      <Text style={styles.imageSelectionTitle}>Select Your Meals by Clicking on the Images Below and scrolling left/right for more:</Text>

      {/* Image Slider with images */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        {meals.map(meal => (
          <TouchableOpacity key={meal.id} onPress={() => toggleMealSelection(meal)} style={styles.sliderTextContainer}>
            <Image source={meal.image} style={styles.mealImage} />
            <Text style={styles.sliderText}>{meal.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Output Area for Selected Meals */}
      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>Selected Meals:</Text>
        {selectedMeals.length === 0 ? (
          <Text>No meals selected yet.</Text>
        ) : (
          selectedMeals.map(meal => (
            <Text key={meal.id}>{meal.name}</Text>
          ))
        )}
      </View>

      {/* Clear Selection Button */}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => setSelectedMeals([])}
      >
        <Text style={styles.clearButtonText}>Clear Selections</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    paddingTop: 80,
  },
  totalItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20
  },
  navContainer: {
    position: 'absolute',
    top: 20,
    right: 16,
    flexDirection: 'row',
    zIndex: 1
  },
  navLink: {
    fontSize: 18,
    color: '#1d2d57',
    marginLeft: 20
  },
  averagePriceContainer: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  averagePriceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  averagePriceText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  imageSelectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  slider: {
    height: 200,
    marginBottom: 20
  },
  sliderTextContainer: {
    width: 150,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#eee',
    borderRadius: 10
  },
  mealImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  sliderText: {
    fontSize: 16,
    color: '#333'
  },
  outputContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  outputText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  clearButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default HomeScreen;