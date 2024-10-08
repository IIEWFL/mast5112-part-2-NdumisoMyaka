import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useNavigation } from '@react-navigation/native';

const CoursesScreen = () => {
  const navigation = useNavigation();

  
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [price, setPrice] = useState('');

  //Data for meals with prices
  const [meals, setMeals] = useState([
    { id: 1, name: 'Steak', course: 'Mains', price: 250 },
    { id: 2, name: 'Caesar Salad', course: 'Starters', price: 100 },
    { id: 3, name: 'Chocolate Cake', course: 'Desserts', price: 80 },
    { id: 4, name: 'Lemonade', course: 'Drinks', price: 50 },
    
  ]);

  const handleSubmit = () => {
    if (!dishName || !selectedCourse || !price) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new menu item object
    const newItem = {
      id: Math.random().toString(),
      name: dishName,
      description,
      course: selectedCourse,
      price: parseFloat(price),
    };

    // Update meals with new item
    setMeals([...meals, newItem]);

    
    setDishName('');
    setDescription('');
    setSelectedCourse('');
    setPrice('');

    alert(`Added ${dishName} to the menu!`);
  };


  const removeMenuItem = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses Screen</Text>

      {/* Input Fields for Adding Menu Items */}
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter dish description"
        multiline
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a Course" value="" />
        {['Mains', 'Starters', 'Desserts', 'Drinks'].map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      {/* Display Current Meals */}
      <ScrollView>
        {meals.map(meal => (
          <View key={meal.id} style={styles.mealContainer}>
            <Text style={styles.mealTitle}>{meal.name}</Text>
            <Text>{meal.description}</Text>
            <Text>{meal.course}</Text>
            <Text>R{meal.price}</Text>
            {/* Remove Button */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeMenuItem(meal.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6a0dad',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#6a0dad',
  },
  input: {
    height: 50,
    borderColor: '#6a0dad',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#6a0dad',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  mealContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  removeButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default CoursesScreen;