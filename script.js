//your JS code here. If required.
 function removeEle() {
        let select = document.getElementById("colorSelect");
        let selectValue = select.value;
        console.log(selectValue);
        let option = select.children;
        for (let x of option) {
          if (selectValue === x.value) {
            x.remove();
          }
        }
      }