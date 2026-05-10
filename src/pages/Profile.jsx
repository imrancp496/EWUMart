import {
  PiHeartBold,
  PiShoppingBagBold,
  PiMessengerLogoBold,
} from "react-icons/pi";
import ProfileBio from "../components/ProfileBio";
import PersonalInfo from "../components/PersonalInfo";
import ProductGroup from "../components/ProductGroup";

const group1 = [
  {
    id: 2,
    name: "Sunflower Bag Charm",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695165275_2870762539938787_82993416148412311_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFEde59hr4dnVFegwAfQjPAIANfAIonQMYgA18AiidAxvakhqoPO3VKoZdToQc0KyLz0BndujcAIOOS7GTbajGO&_nc_ohc=2wzzR2i-RHUQ7kNvwE3B0uo&_nc_oc=Adql8c1TOYNH5CbMhWoATHWcfM7bCJ_4lHjjQqhj_kyEfv4o6TR6zJ0BJzdis_qCE0U&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=ElwSqqaif0iFZxReEvO5aw&_nc_ss=7b2a8&oh=00_Af4HtLSv7ebRF96Mxacp1SHxbp-yIjDD5tR5Xcvjmwik5g&oe=6A06338D",
    price: "150",
  },
  {
    id: 3,
    name: "Daisy Bag Charm (Yellow)",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695425127_2870762506605457_3196662573864127644_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEy6JwvRjTswkIGJVnc6sanXhboURSfVyteFuhRFJ9XK-js4kdX0fDUI_B_UT0nhkJ7WxXBDyyxwZhG35tjOJ5n&_nc_ohc=K8hyWjiDYYYQ7kNvwGXhSR3&_nc_oc=Ado98_N2NqZOJWcXZ2ahV4dn10xsKMwKrSL3loqfgJwV-6sRhHhS0mboGfoRPpe_J3w&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=LQCg6n7HKwW4Mh_7tpunKw&_nc_ss=7b2a8&oh=00_Af7Fp8XlMc_lqO23XPnBk3aSErkpUb3Ar-DjBFTry152GA&oe=6A05FDD8",
    price: "150",
  },
  {
    id: 4,
    name: "Lilly Bag Charm (White)",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695094086_2870762466605461_5882877417918392173_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHbk7tGa7JP3R9Z-Gq5kbt6-SXJc9nFomv5Jclz2cWiawJbqvTD4IyhZzSZmUac54_sM6SeYUWb81B6R5CvvVRp&_nc_ohc=fB4WO-DVTL8Q7kNvwHPm_Z3&_nc_oc=AdpcGEfVM_ndRWkuVxsUy1RscPuotW8YicJgJ7i6xoz_SI6fEHllKR-3x5-meOInBOs&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=jsYHRBtAV84szhxFj5R6Ow&_nc_ss=7b2a8&oh=00_Af6neffqoP55IH8PUFrdCyHq42c7Jf-kUAseYdpPfnIchg&oe=6A0625CB",
    price: "150",
  },
  {
    id: 5,
    name: "Daisy Bag Charm (Red)",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/696235980_2870762419938799_4058332663606090558_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG7v2a2hqvfY7shrXvtZKqtLmw7k-PzTUUubDuT4_NNRarg4v_5gnLtL8iIYSUgR-7wje3dFgYqrDr7BqSgjmbl&_nc_ohc=0cUoDSRnnU4Q7kNvwFN_BCk&_nc_oc=Adr7sJzCAusB4TAd1n9cMYkceqjQh4rj78d-sgUT4hTI5BXII9wSLczAejxYy-rnoek&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=NAeAOPg5WPy3Fgu4SrNdIw&_nc_ss=7b2a8&oh=00_Af45i6bwuhgNB3BEPAgbjH89U1utM9LqfcA4saJEMUUmEQ&oe=6A061778",
    price: "150",
  },
  {
    id: 6,
    name: "Lavender Bag Charm",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695332446_2870762346605473_4360343269867544017_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG-FjtGlpvk7yAE9zT0ljEQzUQVskVb5FTNRBWyRVvkVJfh3DNOXtjPN2PARWpZfdU1Zwq84U0oXdvrwoUDbvh6&_nc_ohc=I43TuM8mLocQ7kNvwFNmojc&_nc_oc=Adr_niLmr2BScyWgjR8CFSjQnSPz8iYIjzu-wxrhlAEbLjAxQ2y9JsGLP_CMDCKdhGA&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=fCza7JcK5mE4SxNor8X0nQ&_nc_ss=7b2a8&oh=00_Af7iYb1LtdJUDphjBA8HU22UfpuP6KAT4Ki-WAWEjXbFNQ&oe=6A0617A0",
    price: "150",
  },
  {
    id: 7,
    name: "Cherry Bag Charm",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/696207433_2870762286605479_565108735041175554_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEla4kv3LBST0-VchjxuyXRsEpDuZT-z5KwSkO5lP7PkuZ5DF_pHkfgVTIAO9zDI2hv_S9LLms7cbjthObKlTo1&_nc_ohc=U1rpmhLOF8kQ7kNvwE0Pw_N&_nc_oc=Adpj3vOfN0iDj193ouD3JYBOIXW3CvE88QYkIc4prigF6nGhFJcRoeJ6SiLlANceDRM&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=l7lOsN5AcZxKab7oon8Jig&_nc_ss=7b2a8&oh=00_Af6m1MoydaOxXggwlsYWIikps1MNG5tXbz0SzUAPXgrLIg&oe=6A0622EE",
    price: "150",
  },
  {
    id: 8,
    name: "Lily Bag Charm (Pink)",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695808208_2870762126605495_9022172813278768816_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHJyZ_4cXhCXvE1MMG01_yeQGtiao6AUY9Aa2JqjoBRj_QfWE39V4x_JO6gZfQEiBTs4rztvvJh_30QUZ7p5kbQ&_nc_ohc=qqBVn3-NhpYQ7kNvwEbUb7m&_nc_oc=AdoBP-thmiD3-2xPdfa_LTVOqSAa-IxLdoPeB9bBmM6g3mOLylE4hYkMMPXGStFN9dk&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=YY3SZcw0CXoBCrEq7b2bVQ&_nc_ss=7b2a8&oh=00_Af53v3W8n8Ho2mcGKJSm5gWQG4s9q2MuYSqFvrWvoEeQHA&oe=6A062BE8",
    price: "150",
  },
];

const group2 = [
  {
    id: 1,
    name: "SwissRoll Keyring",
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/695599012_2870762586605449_7141987315960086467_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHx3U6Mahv0124u3Fto0hQiRGBNNu4cnONEYE027hyc4xGIPyqGIkflQAzoJwoWIpbPJ12oBoGskqxD-2GdDmyP&_nc_ohc=107QtFW1QfgQ7kNvwG4GDgw&_nc_oc=Adr0gJCXwMef7h8Wt7UkTP-Ajo1MSfOvPPh7tyDmQHXtRDPW8g2CV6bbErp_1T8sY-4&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=uy8LKjcL0xuHLO8F4jPq-A&_nc_ss=7b2a8&oh=00_Af6lku5siV6iNztbbG-hqz9MMBbK2dpWo33s_OOKesZ1jw&oe=6A062CBF",
    price: "150",
  },
];

function ProfilePic() {
  return (
    <div>
      <button
        className={`font-syne bg-brand-mid flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 text-5xl sm:h-30 sm:w-30 ${location.pathname.startsWith("/profile") ? "border-white" : "border-none"} text-center font-bold text-white`}
      >
        <img src="https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/625870160_122103398049235600_7839604368336558742_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGF0-PAiu-awTJkpwhqRatfnmbHgbvs0dSeZseBu-zR1EzQ1Zs3JTlJ3yV4nKafgkG36O_kTvFr3ptUBEFmK9YU&_nc_ohc=AOaebOzdKw8Q7kNvwGXbFPR&_nc_oc=AdqIWh405en7FiXPh9hU6HxRHUsItllxODmTIhjaeijOSxWKlCvBdK99_QmN6PSJF54&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=DRZaLO9zeXX0rGkE9jaLfg&_nc_ss=7b2a8&oh=00_Af7FbBpabPjuCLxAuiypgbhhFSdWXFluyPBgnsGa1MnI3A&oe=6A0623DE" />
      </button>
    </div>
  );
}

function ProfileName() {
  return (
    <div className="mb-1">
      <p className="mb-1 text-xl leading-5 font-bold sm:text-2xl">Opalite</p>
      <p className="text-text2 text-sm font-bold uppercase">Raisa</p>
    </div>
  );
}

function ProfileCount() {
  return (
    <div className="text-text2 flex items-center gap-4 text-sm">
      <div className="flex items-center gap-1">
        <PiShoppingBagBold size={24} />
        <span className="font-bold">8</span>
      </div>
      <div className="flex items-center gap-1">
        <PiHeartBold size={24} />
        <span className="font-bold">34</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex w-full items-center gap-4">
      <button className="xs:rounded-lg xs:py-3 bg-brand-mid hover:bg-brand-mid-dark flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold text-white">
        <PiHeartBold size={20} />
        Like
      </button>
      <button className="xs:rounded-lg xs:py-3 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-300">
        <PiMessengerLogoBold size={20} />
        Message
      </button>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <div className="xl:mb-12 xl:flex xl:items-center xl:justify-center xl:gap-16">
        <div className="mb-6 w-full max-w-2xl xl:mx-0 xl:mb-0 xl:flex-1">
          <div className="mb-4 flex items-center gap-3">
            <ProfilePic />
            <div>
              <ProfileName />
              <ProfileCount />
            </div>
          </div>
          <ProfileBio
            bioText={
              "Sunflowers • Lilies • Flowers • Crochet 🧶\nHandmade bouquets, cute keychains and bag charms 🌻\nPerfect for gifts & keepsakes 🎀"
            }
          />
          <Buttons />
        </div>
        <div className="mb-12 w-full max-w-2xl xl:mx-0 xl:mb-0 xl:flex-1">
          <PersonalInfo
            fullName={"Raiyana Binte Reza Raisa"}
            studentID={"2023-3-60-202"}
            gender={"female"}
            department={"BBA"}
            fbLink={"https://www.facebook.com/profile.php?id=61587068012651"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ProductGroup
          heading={"Bag Charms"}
          description={"Crocheted Bag Charms"}
          products={group1}
        />
        <ProductGroup
          heading={"Keyrings"}
          description={"Crocheted Key Rings"}
          products={group2}
        />
      </div>
    </div>
  );
}
