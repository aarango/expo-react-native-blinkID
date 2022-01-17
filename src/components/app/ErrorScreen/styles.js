import { StyleSheet } from 'react-native';
import { Colors } from '@auteco/theme';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginTop: 28,
    width: 200,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  errorText: {
    alignSelf: 'center',
    color: Colors.GRAY_LIGHT,
    fontSize: 14,
    marginTop: 15,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    flexDirection: 'row',
    height: 60,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 3,
    width: 50,
  },
  image: {
    height: 50,
    width: 50,
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 18,
    width: '80%',
  },
  safeArea: {
    flex: 1,
  },
  textCentred: {
    textAlign: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 24,
  },
  verticallyCentered: {
    justifyContent: 'center',
  },
});

export { styles };
