import { showMessage} from "react-native-flash-message";
import authErrorCode from "../../authMessage/authErrorCode";
export default () =>{
    showMessage({
        message: authErrorCode(error.code),
        type: "danger",
        icon:'warning'                
      });
}