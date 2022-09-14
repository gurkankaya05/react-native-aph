import { showMessage} from "react-native-flash-message";
export default () =>{
    showMessage({
        message: "Girilen Şifreler aynı değil!",
        type: "danger",
        icon:'warning'                
      });
}