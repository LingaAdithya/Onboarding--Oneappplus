import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  Radio,
  RadioGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingPage.module.css";

const OnboardingPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/onboarding-page-2");
  }, [navigate]);

  return (
    <div className={styles.onboardingPage1}>
      <div className={styles.container78}>
        <div className={styles.container75}>
          <div className={styles.container67}>
            <Input
              className={styles.mobileNumberOf}
              placeholder="Mobile number of owner"
              width="393.3px"
              w="393.3px"
            />
            <div className={styles.div}>+91</div>
          </div>
          <Form className={styles.button43}>
            <Form.Label>Shop owner email address</Form.Label>
            <Form.Control type="email" />
          </Form>
          <Form className={styles.textbox26}>
            <Form.Label>Shop owner full name</Form.Label>
            <Form.Control type="text" />
          </Form>
          <div className={styles.button45}>
            <div className={styles.verify}>Verify</div>
          </div>
          <div className={styles.yesIWould}>
            Yes, I would like to receive important updates and notifications
            from OneAppPlus on my
          </div>
          <div className={styles.theseWillBe}>
            These will be used to share revenue related communications
          </div>
          <div className={styles.shopOwnerDetails}>Shop owner details</div>
          <div className={styles.sameAsShop}>Same as shop mobile number.</div>
          <div className={styles.whatsapp}>WhatsApp</div>
          <img className={styles.image71Icon} alt="" src="/image-71@2x.png" />
          <img
            className={styles.radioBtnChecked1}
            alt=""
            src="/radio-btn-checked-1.svg"
          />
          <img className={styles.image72Icon} alt="" src="/image-72@2x.png" />
          <img className={styles.image76Icon} alt="" src="/image-76@2x.png" />
        </div>
        <div className={styles.container74}>
          <div className={styles.container68}>
            <div className={styles.parent}>
              <div className={styles.div1}>+91</div>
              <Input
                className={styles.mobileNumberAt}
                placeholder="Mobile number at shop"
                width="412.6px"
                w="412.6px"
              />
            </div>
          </div>
          <div className={styles.container66}>
            <Input
              className={styles.stdCode}
              placeholder="STD code"
              width="144.2px"
              w="144.2px"
            />
            <div className={styles.div2}>+91</div>
            <div className={styles.div3}>|</div>
            <Input
              className={styles.landlineNumber}
              placeholder="Landline number"
              width="277px"
              w="277px"
            />
          </div>
          <div className={styles.button44}>
            <div className={styles.verify}>Verify</div>
          </div>
          <div className={styles.button46}>
            <div className={styles.verify2}>Verify</div>
          </div>
          <div className={styles.yourCustomersWill}>
            Your customers might call on this number for general enquiries
          </div>
          <div className={styles.contactNumberAt}>Contact number at shop</div>
          <div className={styles.orWantTo}>
            or want to share landline number
          </div>
          <img className={styles.image74Icon} alt="" src="/image-74@2x.png" />
        </div>
        <iframe
          className={styles.container73}
          src="https://maps.app.goo.gl/hyDoc8fuyahUC2qz8"
        />
        <div className={styles.orEnterCoordinates}>
          or enter coordinates manually
        </div>
        <div className={styles.container55}>
          <div className={styles.button41}>
            <div className={styles.goBack}>Go back</div>
            <img
              className={styles.caretLeftIcon}
              alt=""
              src="/caret-left.svg"
            />
          </div>
          <a className={styles.button42} onClick={onButtonClick}>
            <div className={styles.next}>Next</div>
            <img
              className={styles.triangleRightIcon}
              alt=""
              src="/triangle-right.svg"
            />
          </a>
        </div>
      </div>
      <div className={styles.container77}>
        <div className={styles.container76}>
          <div className={styles.container69}>
            <div className={styles.enterYourShops}>
              Enter your Shop's locality, eg. X48G St,Easwar.
            </div>
            <div className={styles.detect}>Detect</div>
            <RadioGroup className={styles.record2}>
              <Radio colorScheme="red" />
            </RadioGroup>
          </div>
          <Form className={styles.textbox23}>
            <Form.Label>Shop name</Form.Label>
            <Form.Control type="text" />
          </Form>
          <Form className={styles.textbox24}>
            <Form.Label>Shop’s complete address</Form.Label>
            <Form.Control type="text" />
          </Form>
          <div className={styles.textbox25}>
            <div className={styles.pleaseEnsureThis}>
              Please ensure this is same as the address on your FSSAI document
              (if applicable)
            </div>
          </div>
          <div className={styles.pleasePlaceThe}>
            Please place the pin accurately at your shop's location on the map
          </div>
          <div className={styles.thisWillHelp}>
            This will help your customers of OneAppPlus to locate your store
          </div>
          <div className={styles.shopDetails}>Shop details</div>
          <div className={styles.nameAddressAnd}>
            Name, address and location
          </div>
          <img className={styles.image70Icon} alt="" src="/image-70@2x.png" />
        </div>
        <b className={styles.shopInformation}>Shop Information</b>
        <div className={styles.container81}>
          <div className={styles.createYourContainer}>
            <p className={styles.createYour}> Create your</p>
            <p className={styles.createYour}> Shop page</p>
          </div>
          <div className={styles.shopTypeContainer}>
            <p className={styles.shopType}>{`Shop Type &`}</p>
            <p className={styles.shopType}>Timings</p>
          </div>
          <div className={styles.productsShopImagesContainer}>
            <p className={styles.shopType}>Products, Shop</p>
            <p className={styles.shopType}>images</p>
          </div>
          <div className={styles.shopNameAddress}>Shop name, address,</div>
          <div className={styles.contactNoOwner}>
            contact no., owner details
          </div>
          <div className={styles.typeOpeningHours}>type, opening hours</div>
          <div
            className={styles.establishmentProduct}
          >{`Establishment & Product Card`}</div>
          <div className={styles.uploadImages}>Upload Images</div>
          <div className={styles.radio2}>
            <div className={styles.frame}>
              <div className={styles.shopInformation1}> Shop Information</div>
            </div>
          </div>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          <div className={styles.button13}>
            <div className={styles.div4}>2</div>
          </div>
          <div className={styles.button14}>
            <div className={styles.div5}>3</div>
          </div>
        </div>
      </div>
      <div className={styles.pin31Parent}>
        <img className={styles.pin31} alt="" src="/pin-3-1.svg" />
        <div className={styles.button6Parent}>
          <a
            className={styles.button6}
            href="https://www.oneappplus.com/in/cart"
          >
            <div className={styles.profile}>Profile</div>
            <img
              className={styles.userSquareIcon}
              alt=""
              src="/user-square.svg"
            />
          </a>
          <a
            className={styles.x48g44w40thSteaswar}
            href="https://www.oneappplus.com/in/access-location?page=home"
          >
            X48G+44W,40th St,Easwar.
          </a>
          <Stack className={styles.wrapper}>
            <Menu width="153.4px" height="48px">
              <MenuButton
                w="153.4px"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="red"
              >
                English
              </MenuButton>
              <MenuList>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Tamil">Tamil</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <a
            className={styles.image40}
            href="https://www.oneappplus.com/in/cart"
          />
          <a
            className={styles.bell1}
            href="https://www.oneappplus.com/in/notification"
          >
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </a>
          <a
            className={styles.favorite2}
            href="https://www.oneappplus.com/in/main?page=favourite"
          >
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          </a>
          <img className={styles.menu81} alt="" src="/menu-8-1.svg" />
        </div>
        <a
          className={styles.caretDown1}
          href="https://www.oneappplus.com/in/access-location?page=home"
        >
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </a>
        <a className={styles.image2} href="https://www.oneappplus.com/in/" />
      </div>
      <div className={styles.button5}>
        <Input
          className={styles.searchYourDesired}
          placeholder="Search your desired ite..."
          width="303px"
          textColor="#ff0000"
          w="303px"
        />
        <img className={styles.searchIcon} alt="" src="/search.svg" />
      </div>
      <div className={styles.container28}>
        <div className={styles.container20Wrapper}>
          <div className={styles.container20}>
            <TextField
              className={styles.yourEmailAddress}
              color="error"
              label="Your Email Address"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "37.3px" },
                width: "237.5px",
              }}
            />
            <div className={styles.button7}>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
        </div>
        <div className={styles.no44333333dacAdithig1}>
          No 44333333,DAC AdithiG1 ground
          Floor,40thStreet,Pammal,chennai,oneappplus@gmail.com044-35003402
        </div>
        <a
          className={styles.container14}
          href="https://listapps.oneappplus.com/apks/digitalstore/oneappplus_digital_store.apk"
          target="_blank"
        >
          <div className={styles.getItOnoneappplusContainer}>
            <p className={styles.shopType}>Get It On</p>
            <p className={styles.shopType}>OneAppPlus</p>
          </div>
          <div className={styles.digitalStore}>Digital Store</div>
          <a className={styles.image16} />
        </a>
        <b className={styles.oneappPlus}>OneApp Plus</b>
        <a
          className={styles.container13}
          href="https://apps.apple.com/cz/app/oneapp-plus/id1661077038"
          target="_blank"
        >
          <div className={styles.appStore}>App Store</div>
          <img className={styles.apple1Icon} alt="" src="/apple-1.svg" />
          <div className={styles.downloadOn}>Download on</div>
        </a>
        <div className={styles.subscribeToOur}>
          Subscribe to our news letter to get latest updates
        </div>
        <div className={styles.container12}>
          <div className={styles.googlePlay}>Google Play</div>
          <img className={styles.image49Icon} alt="" src="/image-49@2x.png" />
          <div className={styles.getItOn1}>GET IT ON</div>
        </div>
        <div className={styles.downloadOurApps}>DOWNLOAD OUR APPS</div>
        <a
          className={styles.linkForDownloads}
          href="https://listapps.oneappplus.com/grid.html"
          target="_blank"
        >
          Link For Downloads
        </a>
        <div className={styles.newsLetter}>NEWS LETTER</div>
        <div className={styles.contactUsPrivacyPolicyTermParent}>
          <a
            className={styles.contactUsPrivacy}
            href="https://www.oneappplus.com/in/help-and-support"
          >
            Contact Us
          </a>
          <a
            className={styles.contactUsPrivacy1}
            href="https://www.oneappplus.com/in/html?page=privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className={styles.contactUsPrivacy2}
            href="https://www.oneappplus.com/in/html?page=terms-and-condition"
          >{`Terms & Conditions`}</a>
          <a
            className={styles.contactUsPrivacyContainer}
            href="https://www.oneappplus.com/in/html?page=recycling_policy"
          >
            <p className={styles.shopType}>{`Retail E-Waste & recycling`}</p>
            <p className={styles.shopType}>policy</p>
          </a>
          <a
            className={styles.contactUsPrivacyContainer1}
            href="https://www.oneappplus.com/in/html?page=return_policy"
          >
            <p
              className={styles.shopType}
            >{`Cancellation & refund - return`}</p>
            <p className={styles.shopType}>policy</p>
          </a>
          <div
            className={styles.contactUsPrivacy3}
          >{`Delivery & shipping policy`}</div>
          <div className={styles.profileaddressmyOrdersbecomeParent}>
            <a
              className={styles.profileaddressmyOrdersbecome}
              href="https://www.oneappplus.com/in/profile"
            >
              Profile
            </a>
            <a
              className={styles.profileaddressmyOrdersbecome1}
              href="https://www.oneappplus.com/in/address"
            >
              Address
            </a>
            <a
              className={styles.profileaddressmyOrdersbecome2}
              href="https://www.oneappplus.com/in/order"
            >
              My Orders
            </a>
            <a
              className={styles.profileaddressmyOrdersbecome3}
              href="https://cp.oneappplus.com/store/apply"
              target="_blank"
            >
              Become a Seller
            </a>
            <a
              className={styles.profileaddressmyOrdersbecome4}
              href="https://cp.oneappplus.com/deliveryman/apply"
              target="_blank"
            >
              Become a Delivery Man
            </a>
            <a
              className={styles.profileaddressmyOrdersbecome5}
              href="https://www.oneappplus.com/in/testimonial"
              target="_blank"
            >
              Testimonials
            </a>
            <a
              className={styles.contactUsPrivacy4}
              href="https://www.oneappplus.com/in/html?page=about-us"
            >
              About Us
            </a>
            <div className={styles.myAccount}>My Account</div>
          </div>
          <div className={styles.quickLinks}>Quick Links</div>
        </div>
        <div className={styles.followUsOn}>Follow us on</div>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <a
          className={styles.image12}
          href="https://x.com/oneappplus"
          target="_blank"
        />
        <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
        <a
          className={styles.image11}
          href="https://www.facebook.com/oneappplus"
          target="_blank"
        />
        <a
          className={styles.image10}
          href="https://www.instagram.com/oneappplus"
          target="_blank"
        />
        <div className={styles.allRightsReserved}>
          All Rights Reserved Managed by OneAppPlus
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
