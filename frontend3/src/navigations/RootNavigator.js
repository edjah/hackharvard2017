import { StackNavigator } from 'react-navigation'
import { Platform, StatusBar } from 'react-native';
import UpdateInfo from '../screens/UpdateInfo'
import Share from '../screens/Share'
import AddFriend from '../screens/AddFriend'
import SelectInfo from "../screens/SelectInfo";

export default createRootNavigator = StackNavigator({
    SelectInfo: { screen: SelectInfo },
    AddFriend: { screen: AddFriend },
    UpdateInfo: { screen: UpdateInfo },
    Share: { screen: Share },
},
{
  cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
});
