import { useCallback } from "react";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Radio,
  RadioGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
  Input,
} from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import styles from "./OnboardingPage1.module.css";
import Categories from './Categories'; 
import Verticals from './Verticals'; 

const OnboardingPage1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [selectedVertical, setSelectedVertical] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleVerticalChange = (vertical) => {
    setSelectedVertical(vertical);
    setSelectedCategory(''); // Reset selected category when vertical changes
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.onboardingPage2}>
      <div className={styles.container86}>
        <div className={styles.selectThisOption}>
          Select this option when you have a place for customers to shop-in
          store and also want to activate online ordering for your Shop
        </div>
        <div className={styles.selectWhenYou}>
          Select when you don't have a facility for customers to pickup
          in-person
        </div>
        <div className={styles.selectWhenYou1}>
          Select when you want to order online and pickup in - person
        </div>
        <div className={styles.selectMostRelevant}>
          Select most relevant category for your Shop type
        </div>
        <div className={styles.bothDeliveryAnd}>
          Both, delivery and In-store shopping available
        </div>
        <div className={styles.establishmentType}>Establishment type</div>
        <div className={styles.checkbox7} />
        <img className={styles.image85Icon} alt="" src="/image-85@2x.png" />
        <div className={styles.radio3}>
          <div className={styles.frame}>
            <RadioGroup className={styles.ellipse}>
              <Radio colorScheme="red" />
            </RadioGroup>
            <div className={styles.inStoreShopping}> In-store shopping</div>
          </div>
        </div>
        <RadioGroup className={styles.ellipse1}>
          <Radio colorScheme="red" />
        </RadioGroup>
        <div className={styles.ellipse2} />
        <div className={styles.radio4}>
          <div className={styles.frame1}>
            <RadioGroup className={styles.ellipse}>
              <Radio colorScheme="red" />
            </RadioGroup>
            <div className={styles.deliveryOnly}>Delivery only</div>
          </div>
        </div>
      </div>
      <div className={styles.container85}>
        <div className={styles.shopOperationalHours}>
          Shop operational hours
        </div>
        <div className={styles.button52}>
          <div className={styles.pm}>8:45PM</div>
          <img className={styles.pieChartIcon} alt="" src="/pie-chart.svg" />
        </div>
        <div className={styles.button53}>
          <div className={styles.am}>7:00AM</div>
          <img className={styles.pieChartIcon1} alt="" src="/pie-chart1.svg" />
        </div>
        <div className={styles.markShopOpening}>
          Mark shop opening and closing hours
        </div>
        <div className={styles.checkbox1}>
          <div className={styles.frame2}>
            <div className={styles.rectangle} />
            <div className={styles.monday}>Monday</div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.rectangle} />
            <div className={styles.monday}>Tuesday</div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.rectangle} />
            <div className={styles.monday}>Wednesday</div>
          </div>
          <div className={styles.frame5}>
            <div className={styles.rectangle} />
            <div className={styles.monday}>Thursday</div>
          </div>
        </div>
        <div className={styles.rectangle4} />
        <div className={styles.rectangle5} />
        <div className={styles.rectangle6} />
        <div className={styles.dontForgetTo}>
          Don't forget to uncheck your off-day
        </div>
        <div className={styles.markOpenDays}>Mark open days</div>
        <div className={styles.addTimeSlots}>+ Add time slots</div>
        <div className={styles.saturday}>Saturday</div>
        <div className={styles.opensAt}>Opens at</div>
        <img className={styles.image81Icon} alt="" src="/image-81@2x.png" />
        <div className={styles.closesAt}>Closes at</div>
        <div className={styles.sunday}>Sunday</div>
        <div className={styles.friday}>Friday</div>
        <div className={styles.to}>to</div>
      </div>


      <div className={styles.container84}>
  <div className={styles.selectOptionsWhich}>
    Select options which best describe Products you serve
  </div>
  <div className={styles.dropdownContainer}>
    <Verticals handleVerticalChange={handleVerticalChange} />
  </div>
  {selectedVertical && (
    <div className={styles.dropdownContainer}>
      <Categories
        vertical={selectedVertical}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  )}
</div>

 
      <div className={styles.container81}>
        <div className={styles.createYourShopContainer}>
          <p className={styles.createYour}>Create your</p>
          <p className={styles.createYour}>Shop page</p>
        </div>
        <div className={styles.shopTypeContainer}>
          <p className={styles.createYour}>{`Shop Type &`}</p>
          <p className={styles.createYour}>Timings</p>
        </div>
        <div className={styles.productsShopContainer}>
          <p className={styles.createYour}>Products , Shop</p>
          <p className={styles.createYour}>images</p>
        </div>
        <div className={styles.shopNameAddress}>Shop name, address,</div>
        <div className={styles.contactNoOwner}>contact no., owner details</div>
        <div className={styles.typeOpeningHours}>type, opening hours</div>
        <div
          className={styles.establishmentProducts}
        >{`Establishment & Products Card`}</div>
        <div className={styles.uploadImages}>Upload Images</div>
        <div className={styles.radio2}>
          <div className={styles.frame9} />
        </div>
        <div className={styles.shopInformation}>Shop Information</div>
        <div className={styles.button13}>
          <div className={styles.div}>3</div>
        </div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      </div>
      <b className={styles.shopType1}>{`Shop Type & Timings`}</b>
      <div className={styles.button49}>
        <div className={styles.shopId21294241}>Shop ID:21294241</div>
      </div>
      <img className={styles.pin31} alt="" src="/pin-3-11.svg" />
      <div className={styles.button6Parent}>
        <a
          className={styles.button6}
          href="https://www.oneappplus.com/in/profile"
        >
          <div className={styles.profile}>Profile</div>
          <img
            className={styles.userSquareIcon}
            alt=""
            src="/user-square1.svg"
          />
        </a>
        <a
          className={styles.x48g44w40thSteaswar}
          href="https://www.oneappplus.com/in/access-location?page=home"
        >
          X48G+44W,40th St,Easwar.
        </a>
        <Stack className={styles.wrapper}>
          <Menu width="164.4px" height="51px">
            <MenuButton
              w="164.4px"
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
        <a className={styles.image40} />
        <a
          className={styles.bell1}
          href="https://www.oneappplus.com/in/notification"
        >
          <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        </a>
        <a
          className={styles.favorite2}
          href="https://www.oneappplus.com/in/main?page=favourite"
        >
          <img className={styles.vectorIcon2} alt="" src="/vector6.svg" />
        </a>
        <img className={styles.menu81} alt="" src="/menu-8-11.svg" />
      </div>
      <img className={styles.caretDown1} alt="" src="/caret-down-1.svg" />
      <a className={styles.image2} href="https://www.oneappplus.com/in/" />
      <div className={styles.container55}>
        <a className={styles.button41} onClick={onButtonClick}>
          <div className={styles.goBack}>Go back</div>
          <img className={styles.caretLeftIcon} alt="" src="/caret-left1.svg" />
        </a>
        <div className={styles.button42}>
          <div className={styles.next}>Next</div>
          <img
            className={styles.triangleRightIcon}
            alt=""
            src="/triangle-right1.svg"
          />
        </div>
      </div>
      <div className={styles.container28}>
        <div className={styles.container20}>
          <div className={styles.button7}>
            <div className={styles.subscribe}>Subscribe</div>
          </div>
          <input className={styles.yourEmailAddress} type="text" />
        </div>
        <div className={styles.no44333333dacAdithig1}>
          No 44333333,DAC AdithiG1 ground
          Floor,40thStreet,Pammal,chennai,oneappplus@gmail.com044-35003402
        </div>
        <div className={styles.container14Wrapper}>
          <a
            className={styles.container14}
            href="https://listapps.oneappplus.com/apks/digitalstore/oneappplus_digital_store.apk"
            target="_blank"
          >
            <div className={styles.getItOnoneappplusContainer}>
              <p className={styles.createYour}>Get It On</p>
              <p className={styles.createYour}>OneAppPlus</p>
            </div>
            <div className={styles.digitalStore}>Digital Store</div>
            <a
              className={styles.container14Inner}
              href="https://listapps.oneappplus.com/apks/digitalstore/oneappplus_digital_store.apk"
              target="_blank"
            >
              <img
                className={styles.groupChild}
                alt=""
                src="/group-12@2x.png"
              />
            </a>
          </a>
        </div>
        <b className={styles.oneappPlus}>OneApp Plus</b>
        <a
          className={styles.container13}
          href="https://apps.apple.com/cz/app/oneapp-plus/id1661077038"
          target="_blank"
        >
          <div className={styles.appStore}>App Store</div>
          <img className={styles.apple1Icon} alt="" src="/apple-11.svg" />
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
            <p className={styles.createYour}>{`Retail E-Waste & recycling`}</p>
            <p className={styles.createYour}>policy</p>
          </a>
          <a
            className={styles.contactUsPrivacyContainer1}
            href="https://www.oneappplus.com/in/html?page=return_policy"
          >
            <p
              className={styles.createYour}
            >{`Cancellation & refund - return`}</p>
            <p className={styles.createYour}>policy</p>
          </a>
          <a
            className={styles.contactUsPrivacy3}
            href="https://www.oneappplus.com/in/html?page=shipping_policy"
          >{`Delivery & shipping policy`}</a>
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
        <a
          className={styles.image13}
          href="https://www.linkedin.com/company/77146519/admin/feed/posts/"
          target="_blank"
        />
        <a
          className={styles.image12}
          href="https://x.com/oneappplus"
          target="_blank"
        />
        <a
          className={styles.image14}
          href="https://in.pinterest.com/oneappplus/"
          target="_blank"
        />
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
      <div className={styles.button5}>
        <Input
          className={styles.searchYourDesired}
          placeholder="Search your desired ite..."
          textColor="#ff0000"
        />
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
      </div>
    </div>
  );
};

export default OnboardingPage1;
