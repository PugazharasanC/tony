        // addition of variant text boxes

        var counter = 1;
        function AddVariant() {  
          var types = document.getElementById("Variant-container");
         // var type_id = types.getElementsByTagName("input").length;
         // type_id--;     
          var input = document.createElement('input');
          input.type = "text";
          input.setAttribute('id', 'Type'+ counter);
          input.setAttribute('name', 'Type' );
          input.setAttribute('class', 'form-control');
          input.setAttribute('placeholder', 'Variant type..'+(counter+1));
          input.setAttribute('aria-label', 'Username');
          input.setAttribute('aria-describedby', 'basic-addon1');
          types.appendChild(input);
          
         // var values = document.getElementById("Value-container");
         // var value_id = values.getElementsByTagName("input").length;
                    
          var input_1 = document.createElement('input');
          input_1.type = "text";
          input_1.setAttribute('id', 'Value'+ counter);
          input_1.setAttribute('name', 'Value' );
          input_1.setAttribute('class', 'form-control');
          input_1.setAttribute('placeholder', 'Variant Value..'+(counter+1));
          input_1.setAttribute('aria-label', 'Username');
          input_1.setAttribute('aria-describedby', 'basic-addon1');
          types.appendChild(input_1);
        counter++;  
        }
         
        var h ;
        var check = 0;
        function GenerateVariant(){
          var typeElements = document.getElementById("Variant-container");
          var typeInputs = typeElements.getElementsByTagName("input");
        //  var valueElements = document.getElementById("Value-container");
        //  var valueInputs = valueElements.getElementsByTagName("input");
          VaryingArray = [];
                  
          for(let j=0;j<Math.floor((typeInputs.length+1)/2);j++){     
              var json=  (document.getElementById("Value"+j).value).split(',');
              VaryingArray.push(json);
          }
        
        
        function combos(list, n = 0, result = [], current = []){
            if (n === list.length) result.push(current)
            else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
         
            return result
        }
        
         h = (combos(VaryingArray));
        // console.log(h);
        
         if (check === 0) {
        for(let z = 0; z < h.length;z++)
        {
          var addon = document.getElementById("addon-container");
          var addon_id = addon.getElementsByTagName("input").length;
          addon_id++;      
          var addon_1 = document.createElement('input');
          addon_1.type = "text";
          addon_1.setAttribute('id', 'Addon'+ z);
          addon_1.setAttribute('name', 'Addon' );
          addon_1.setAttribute('class', 'form-control');
          addon_1.setAttribute('placeholder', 'addon Value..'+h[z]);
          addon_1.setAttribute('aria-label', 'Username');
          addon_1.setAttribute('aria-describedby', 'basic-addon1');
          addon.appendChild(addon_1);
          
        }
        
        
        var buttons = document.createElement('button')
        var addon = document.getElementById("addon-container");
        buttons.setAttribute('class','btn btn-primary');
        buttons.setAttribute('style','margin-top: 15px;');
        buttons.setAttribute('id','details');
        buttons.setAttribute('onclick','JsonFile()');
        buttons.innerHTML="Variant Details";
        addon.appendChild(buttons);
        //console.log('loop end');
        }
         check = 1;
        }
        
        function JsonFile(){
          var product = document.getElementById("product").value;
          var description = document.getElementById("description").value;
          var basePrice = document.getElementById("basePrice").value; 
          var typeElements = document.getElementById("Variant-container");
          var typeInputs = typeElements.getElementsByTagName("input");
        //  var valueElements = document.getElementById("Value-container");
        //  var valueInputs = valueElements.getElementsByTagName("input");
          var addon = document.getElementById("addon-container");
          var addonInputs = addon.getElementsByTagName("input");
        
          var sellerArray = [];
         // var finalArray = [];
          var temp = [];
        
          //Variants
        for(let e = 0 ; e<Math.floor((typeInputs.length+1)/2);e++){
          
          var json_1 = {
             type : document.getElementById("Type"+e).value,
             value : (document.getElementById("Value"+e).value).split(','),
          }
            
          temp.push(json_1)
        }
        //console.log(temp);
        
        // Variant details 

        const u = h.flat(1);
        //console.log(u)
        var obj_1 = {};
        var la = [];
 
        for(let i = 0;i<u.length;i++){
          for (let j = 0;j<Math.floor((typeInputs.length+1)/2);j++){
            var obj_1 = {
              [document.getElementById("Type"+j).value] : u[i]
              
            }
            i++;
            la.push(obj_1)
          }
          i--;
        }
        //console.log(la);
        
        var obj_2 = {};
        var ht = Math.floor((typeInputs.length+1)/2);
        var lb = ht;
        var at = [];

        
        for(let i =0;i<la.length;i++){
         obj_2= (la.slice(i,ht))
         at.push(obj_2)
         i = ht - 1;
         ht = ht + lb;
         }
        //console.log(at);
        
        
        var obj_8 = {};
        for(let i = 0; i < h.length;i++){
          obj_8 = {addOnPrice : document.getElementById("Addon"+i).value};
          at[i].push(obj_8);
        }
        
        //console.log(at);
        
        var kt = [];
        for(let i =0 ; i < at.length ; i++){
          kt.push(at[i].reduce(((r, c) => Object.assign(r, c)), {}))
        }
        //console.log(kt)
        
        
        // final json
          sellerArray.push({
            Product : product,
            BasePrice: basePrice,
            Description : description,
            Variants : temp,
            VariantDetails: kt
        });
        
        
        // json conversion
        
          
          var string = JSON.stringify(sellerArray);
          document.getElementById("Json").innerHTML = string;

      }
