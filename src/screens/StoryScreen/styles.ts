import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  container: ViewStyle;
  image: ImageStyle;
  userInfo: ViewStyle;
  userName: ViewStyle;
  indicator: ViewStyle;
  bottomContainer: ViewStyle;
  textInputContainer: ViewStyle;
  cameraButton: ViewStyle;
  messageButton: ViewStyle;
  textInput: TextStyle;
  postedTime: TextStyle;
}>({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  indicator: {
    justifyContent: 'center'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -650
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18
  },
  bottomContainer: {
    position:'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 20
  },
  textInputContainer: {
    width: 280,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: '100%',
    fontSize: 16,
    justifyContent: 'center'
  },
  postedTime: {
    marginLeft: 10,
    color: '#808080',
    fontSize: 18,
    fontWeight: '700'
  },
});
