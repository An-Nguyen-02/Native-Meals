import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Random Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = 'random steert',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Title style={styles.title}>{name}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 10, backgroundColor: 'white' },
  title: { padding: 5 },
});
