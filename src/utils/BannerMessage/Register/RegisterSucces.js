import { showMessage} from "react-native-flash-message";
export default () =>{
    showMessage({
        message: "Kayıt başarıyla yapıldı!",
        type: "success",
        icon:'success'
      });
}