import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Item, Input, Label, Form} from 'native-base';

const App = () => {
  return (
    <SafeAreaView>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
    </SafeAreaView>
  );
};

export default App;
