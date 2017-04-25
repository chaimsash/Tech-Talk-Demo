import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';
import Communications from 'react-native-communications';
import ClassList from './ClassList';

export const BlowYourMind = () => {
  return (
    <Container>
        <Header>
            <Body>
                <Title>Fullstack 1702-NY</Title>
            </Body>
        </Header>
        <Content>
          {ClassList.map(student => {
              return (
                  <View key={student.id}>
                      <Card>
                          <CardItem>
                              <Left>
                                  <Thumbnail source={{uri: student.githubImage}} />
                                  <Body>
                                      <Text>{student.name}</Text>
                                      <Text note>{student.fbInstaSnapchat}</Text>
                                  </Body>
                              </Left>
                            </CardItem>
                            <CardItem cardBody>
                              <Button transparent onPress={() => Communications.phonecall(student.phone, false)}>
                                  <Icon active name="call" />
                              </Button>
                              <Button transparent onPress={() => Communications.email([student.email, null], null, null, null, null)}>
                                    <Icon active name="mail" />
                                </Button>
                                <Button transparent onPress={() => Communications.web(student.githubLink)}>
                                    <Icon active name="logo-github" />
                                </Button>
                                <Button transparent onPress={() => Communications.web(student.linkedinLink)}>
                                    <Icon active name="logo-linkedin" />
                                </Button>
                            </CardItem>
                        </Card>
                   </View>
               );
             }
          )}
        </Content>
    </Container>
  );
};
AppRegistry.registerComponent('BlowYourMind', () => BlowYourMind);
