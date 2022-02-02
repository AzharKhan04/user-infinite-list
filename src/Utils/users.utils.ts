
class UsersUtils {

    getProfilePicName(name?:string) {
        if(!name) {
            return ;
        }

        let fName = name.split(" ")[0];
        let lName = name.split(" ")[1];
    
        let firstChar = "";
        let lastChar = "";
    
        if (fName) {
            firstChar = fName.charAt(0);
        }
        if (lName) {
            lastChar = lName.charAt(0);
        }

        return `${firstChar.toUpperCase()} ${lastChar.toUpperCase()}`;
    }

    getRandomColor() {

        let colors = [
            "blueviolet",
            "royalblue",
            "chocolate",
            "cornflowerblue",
            "yellowgreen",
            "tomato",
            "teal",
            "seagreen",
            "slateblue",
          ];
      
          let rn = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
          if (rn < 0 || rn > 8 || typeof rn !== "number") {
            rn = 0;
          }
          return colors[rn];
    

    }

}


export default UsersUtils;