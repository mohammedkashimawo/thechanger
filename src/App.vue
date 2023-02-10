<template>
  <div id="app">
    <div v-bind:class='geo'>
      <button v-bind:class='jonah' @click='sare'>{{ toggle }}</button>
      <div :class='bla'>
        
       <span v-bind:class='spank'>I am 
       <span style="font-weight:bolder;text-decoration: none;text-decoration-color: darkolivegreen;
      text-decoration-thickness: 3px;">{{ user | momo }}</span></span>
      <br><br>
      <span :class='spankb'>I am the fasted and most reliable
       <u :class="senior">BureaDchanger  </u>in the whole of Abuja</span>
    <br><span :class='spankC'> lets help you get your money exchange in the most
    <u :class="senior"> secured, profitable, reliable and<br> easiest</u>
       way you've never imagine.</span></div>
    <br><br>
  
 <ul v-bind:class="machala">
  <li class="list" style=" border-left:2px white solid;" ><a href="#">Home</a></li>
  <li class="list"><a href="#">About</a></li>
  <li class="list"><a href="#">Clients</a></li>
  <li class="list"><a href="#">Services</a></li>
  <li class="list"><a href="#">Rate</a></li>
  <li class="list"><a href="#">Contact</a></li>
 </ul> 
 <br>
 <div class="Nav">
 <font-awesome-icon icon="fa-brands fa-twitter" style="color:aliceblue;font-size:20px;margin-right:20px;" beat/>
 <font-awesome-icon icon="fa-brands fa-instagram" style="color:aliceblue;font-size:30px;"/>
<a :href="facebook">
 <font-awesome-icon icon="fa-brands fa-facebook" style="color:aliceblue;font-size:30px;"/>
 </a>
 
 <a href="mailto:mojjeasy@gmail.com?subject='this is for proce enquiry'">
  <font-awesome-icon icon="fa-solid fa-envelope" style="color:aliceblue;font-size:30px;"/></a>
 <a :href="money">
  <font-awesome-icon icon="fa-brands fa-whatsapp" style="color:aliceblue;font-size:30px;"/></a>
 <a href="tel:09061525364">
  <font-awesome-icon icon="fa-solid fa-phone fa-beat" style="color:aliceblue;font-size:30px;" beat /></a>
</div>

    
    </div>
    <form action="/#">

    <select id="currency" v-model="pink" >
    <option>select currency</option>
    <option value="AFN">Afghan Afghani</option>
    <option value="ALL">Albanian Lek</option>
    <option value="DZD">Algerian Dinar</option>
    <option value="AOA">Angolan Kwanza</option>
    <option value="ARS">Argentine Peso</option>
    <option value="AMD">Armenian Dram</option>
    <option value="AWG">Aruban Florin</option>
    <option value="AUD">Australian Dollar</option>
    <option value="AZN">Azerbaijani Manat</option>
    <option value="BSD">Bahamian Dollar</option>
    <option value="BHD">Bahraini Dinar</option>
    <option value="BDT">Bangladeshi Taka</option>
    <option value="BBD">Barbadian Dollar</option>
    <option value="BYR">Belarusian Ruble</option>
    <option value="BEF">Belgian Franc</option>
    <option value="BZD">Belize Dollar</option>
    <option value="BMD">Bermudan Dollar</option>
    <option value="BTN">Bhutanese Ngultrum</option>
    <option value="BTC">Bitcoin</option>
    <option value="BOB">Bolivian Boliviano</option>
    <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
    <option value="BWP">Botswanan Pula</option>
    <option value="BRL">Brazilian Real</option>
    <option value="GBP">British Pound Sterling</option>
    <option value="BND">Brunei Dollar</option>
    <option value="BGN">Bulgarian Lev</option>
    <option value="BIF">Burundian Franc</option>
    <option value="KHR">Cambodian Riel</option>
    <option value="CAD">Canadian Dollar</option>
    <option value="CVE">Cape Verdean Escudo</option>
    <option value="KYD">Cayman Islands Dollar</option>
    <option value="XOF">CFA Franc BCEAO</option>
    <option value="XAF">CFA Franc BEAC</option>
    <option value="XPF">CFP Franc</option>
    <option value="CLP">Chilean Peso</option>
    <option value="CNY">Chinese Yuan</option>
    <option value="COP">Colombian Peso</option>
    <option value="KMF">Comorian Franc</option>
    <option value="CDF">Congolese Franc</option>
    <option value="CRC">Costa Rican ColÃ³n</option>
    <option value="HRK">Croatian Kuna</option>
    <option value="CUC">Cuban Convertible Peso</option>
    <option value="CZK">Czech Republic Koruna</option>
    <option value="DKK">Danish Krone</option>
    <option value="DJF">Djiboutian Franc</option>
    <option value="DOP">Dominican Peso</option>
    <option value="XCD">East Caribbean Dollar</option>
    <option value="EGP">Egyptian Pound</option>
    <option value="ERN">Eritrean Nakfa</option>
    <option value="EEK">Estonian Kroon</option>
    <option value="ETB">Ethiopian Birr</option>
    <option value="EUR">Euro</option>
    <option value="FKP">Falkland Islands Pound</option>
    <option value="FJD">Fijian Dollar</option>
    <option value="GMD">Gambian Dalasi</option>
    <option value="GEL">Georgian Lari</option>
    <option value="DEM">German Mark</option>
    <option value="GHS">Ghanaian Cedi</option>
    <option value="GIP">Gibraltar Pound</option>
    <option value="GRD">Greek Drachma</option>
    <option value="GTQ">Guatemalan Quetzal</option>
    <option value="GNF">Guinean Franc</option>
    <option value="GYD">Guyanaese Dollar</option>
    <option value="HTG">Haitian Gourde</option>
    <option value="HNL">Honduran Lempira</option>
    <option value="HKD">Hong Kong Dollar</option>
    <option value="HUF">Hungarian Forint</option>
    <option value="ISK">Icelandic KrÃ³na</option>
    <option value="INR">Indian Rupee</option>
    <option value="IDR">Indonesian Rupiah</option>
    <option value="IRR">Iranian Rial</option>
    <option value="IQD">Iraqi Dinar</option>
    <option value="ILS">Israeli New Sheqel</option>
    <option value="ITL">Italian Lira</option>
    <option value="JMD">Jamaican Dollar</option>
    <option value="JPY">Japanese Yen</option>
    <option value="JOD">Jordanian Dinar</option>
    <option value="KZT">Kazakhstani Tenge</option>
    <option value="KES">Kenyan Shilling</option>
    <option value="KWD">Kuwaiti Dinar</option>
    <option value="KGS">Kyrgystani Som</option>
    <option value="LAK">Laotian Kip</option>
    <option value="LVL">Latvian Lats</option>
    <option value="LBP">Lebanese Pound</option>
    <option value="LSL">Lesotho Loti</option>
    <option value="LRD">Liberian Dollar</option>
    <option value="LYD">Libyan Dinar</option>
    <option value="LTL">Lithuanian Litas</option>
    <option value="MOP">Macanese Pataca</option>
    <option value="MKD">Macedonian Denar</option>
    <option value="MGA">Malagasy Ariary</option>
    <option value="MWK">Malawian Kwacha</option>
    <option value="MYR">Malaysian Ringgit</option>
    <option value="MVR">Maldivian Rufiyaa</option>
    <option value="MRO">Mauritanian Ouguiya</option>
    <option value="MUR">Mauritian Rupee</option>
    <option value="MXN">Mexican Peso</option>
    <option value="MDL">Moldovan Leu</option>
    <option value="MNT">Mongolian Tugrik</option>
    <option value="MAD">Moroccan Dirham</option>
    <option value="MZM">Mozambican Metical</option>
    <option value="MMK">Myanmar Kyat</option>
    <option value="NAD">Namibian Dollar</option>
    <option value="NPR">Nepalese Rupee</option>
    <option value="ANG">Netherlands Antillean Guilder</option>
    <option value="TWD">New Taiwan Dollar</option>
    <option value="NZD">New Zealand Dollar</option>
    <option value="NIO">Nicaraguan CÃ³rdoba</option>
    <option value="NGN">Nigerian Naira</option>
    <option value="KPW">North Korean Won</option>
    <option value="NOK">Norwegian Krone</option>
    <option value="OMR">Omani Rial</option>
    <option value="PKR">Pakistani Rupee</option>
    <option value="PAB">Panamanian Balboa</option>
    <option value="PGK">Papua New Guinean Kina</option>
    <option value="PYG">Paraguayan Guarani</option>
    <option value="PEN">Peruvian Nuevo Sol</option>
    <option value="PHP">Philippine Peso</option>
    <option value="PLN">Polish Zloty</option>
    <option value="QAR">Qatari Rial</option>
    <option value="RON">Romanian Leu</option>
    <option value="RUB">Russian Ruble</option>
    <option value="RWF">Rwandan Franc</option>
    <option value="SVC">Salvadoran ColÃ³n</option>
    <option value="WST">Samoan Tala</option>
    <option value="SAR">Saudi Riyal</option>
    <option value="RSD">Serbian Dinar</option>
    <option value="SCR">Seychellois Rupee</option>
    <option value="SLL">Sierra Leonean Leone</option>
    <option value="SGD">Singapore Dollar</option>
    <option value="SKK">Slovak Koruna</option>
    <option value="SBD">Solomon Islands Dollar</option>
    <option value="SOS">Somali Shilling</option>
    <option value="ZAR">South African Rand</option>
    <option value="KRW">South Korean Won</option>
    <option value="XDR">Special Drawing Rights</option>
    <option value="LKR">Sri Lankan Rupee</option>
    <option value="SHP">St. Helena Pound</option>
    <option value="SDG">Sudanese Pound</option>
    <option value="SRD">Surinamese Dollar</option>
    <option value="SZL">Swazi Lilangeni</option>
    <option value="SEK">Swedish Krona</option>
    <option value="CHF">Swiss Franc</option>
    <option value="SYP">Syrian Pound</option>
    <option value="STD">São Tomé and Príncipe Dobra</option>
    <option value="TJS">Tajikistani Somoni</option>
    <option value="TZS">Tanzanian Shilling</option>
    <option value="THB">Thai Baht</option>
    <option value="TOP">Tongan pa'anga</option>
    <option value="TTD">Trinidad & Tobago Dollar</option>
    <option value="TND">Tunisian Dinar</option>
    <option value="TRY">Turkish Lira</option>
    <option value="TMT">Turkmenistani Manat</option>
    <option value="UGX">Ugandan Shilling</option>
    <option value="UAH">Ukrainian Hryvnia</option>
    <option value="AED">United Arab Emirates Dirham</option>
    <option value="UYU">Uruguayan Peso</option>
    <option value="USD">US Dollar</option>
    <option value="UZS">Uzbekistan Som</option>
    <option value="VUV">Vanuatu Vatu</option>
    <option value="VEF">Venezuelan BolÃ­var</option>
    <option value="VND">Vietnamese Dong</option>
    <option value="YER">Yemeni Rial</option>
    <option value="ZMK">Zambian Kwacha</option>
</select>
</form>
<p>{{ pink }}</p>

    <exchangeWidget></exchangeWidget>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'App',
  data(){
    return{
      abc:false,pink:'',
      user:"Kashimawo Olajunwon Abeeb",
      money:'https://api.whatsapp.com/send?phone=2349061525364',
      facebook:'https://facebook.com',
    
      toggle:"Dark Mode",
      div1:true,
      div12:false,
      div1a:true,
      div1a2:false,
      Dark:true,//the data instances ..if they are to take only a value, that is all they can take..that is why you ashould use computed properties

      Dark2:false,
      
      spanA:true,
      spanA2:false,
      spanB:true,
      spanB2:false,
      spanC:true,
      spanC2:false,
      sen:true,
      sen2:false,
      or:true,
      or2:false,


    
    }
  },
  mounted:function(){
    this.sare();
  

  },
  computed:{
    jonah:function(){
      return{
        Dark:this.abc,
        Dark2:!this.abc,
      
      
    }},
    geo:function(){
      return{
        div1:this.abc,
        div12:!this.abc,
      }
    },
    bla:function(){
      return{
        div1a:this.abc,
        div1a2:!this.abc,
      }
    },
    spank:function(){
      return{
        spanA:this.abc,
        spanA2:!this.abc,

    }
  },
  spankb:function(){
      return{
        spanB:this.abc,
        spanB2:!this.abc,

    }
  },  spankC:function(){
      return{
        spanC:this.abc,
        spanC2:!this.abc,

    }
  },
  senior:function(){
      return{
        sen:this.abc,
        sen2:!this.abc,

    }
  },
   machala:function(){
      return{
        or:this.abc,
        or2:!this.abc,

    }
  }},
  methods:{
sare:function(){
  this.abc=!this.abc;

if(this.abc == false){
  this.toggle="light-mode";
}
else if(this.abc == true){
  this.toggle = "Dark-mode";
}

console.log(this.Dark2);
/*  if(this.abc == true){
    this.toggle="Dark mode";
  this.Dark='Dark2';
  this.div1="div1";
}




  else if(this.abc == false){
    this.toggle ="Light mode";
this.Dark="Dark2";
this.div1="div12";}
*/

},
shark:function(){
document.getElementById('currency').disabled=false;
}
  },
  components: {
  //  HelloWorld
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import "./first.css";
</style>
