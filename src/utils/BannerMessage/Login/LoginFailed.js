import { showMessage} from "react-native-flash-message";
export default () =>{
    showMessage({
        message: "Kullanıcı bilgisi hatalı",
        type: "danger",
        icon:'warning'                
      });
}