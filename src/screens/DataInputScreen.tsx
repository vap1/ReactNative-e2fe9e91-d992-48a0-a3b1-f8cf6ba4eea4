
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DataInputForm from '../components/DataInputForm';

const DataInputScreen: React.FC = () => {
  const handleDataInputSubmit = () => {
    // Handle data input submission logic here
  };

  return (
    <View style={styles.container}>
      <DataInputForm onSubmit={handleDataInputSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataInputScreen;