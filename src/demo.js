import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  faAddressCard,
  faAd,
  faAddressBook,
  faAdjust,
  faAlignJustify,
  faAlignLeft,
  faAngleDoubleDown,
  faAngleDoubleRight,
  faAngleDown,
  faArchive,
  faAtom,
  faBackspace,
  faBars,
  faBell,
  faBellSlash,
  faBinoculars,
  faBolt,
  faBook,
  faBookOpen,
  faBriefcase,
  faBroom,
  faBuilding,
  faBullhorn,
  faBusinessTime,
  faCalendarCheck,
  faCaretDown,
  faCaretRight,
  faCartArrowDown,
  faChalkboard,
  faChalkboardTeacher,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckDouble,
  faCheckSquare,
  faCloudDownload,
  faCloudUpload,
  faCode,
  faCog,
  faCogs,
  faCopy,
  faCreditCard,
  faCrown,
  faCube,
  faDatabase,
  faDesktop,
  faDollarSign,
  faDollyFlatbed,
  faDownload,
  faEdit,
  faEnvelope,
  faEye,
  faEyeSlash,
  faFighterJet,
  faFile,
  faFileAlt,
  faFileImport,
  faFilePdf,
  faFileSignature,
  faFileUpload,
  faFlag,
  faFolder,
  faFolderMinus,
  faFolderOpen,
  faGlobeAmericas,
  faHammer,
  faHandHolding,
  faHome,
  faIdCard,
  faIdCardAlt,
  faImages,
  faLaptopCode,
  faLink,
  faList,
  faListAlt,
  faListOl,
  faLock,
  faLockOpen,
  faMobile,
  faMoneyCheck,
  faMugHot,
  faPaste,
  faPen,
  faPercent,
  faPhoneSquare,
  faPlug,
  faPlusCircle,
  faPoll,
  faPollH,
  faPowerOff,
  faPrint,
  faQrcode,
  faQuestionCircle,
  faRetweet,
  faSave,
  faSearch,
  faSearchMinus,
  faSearchPlus,
  faShare,
  faShippingFast,
  faShoppingBag,
  faShoppingCart,
  faSitemap,
  faSortAlphaDown,
  faSortAmountDown,
  faStore,
  faSuitcase,
  faSync,
  faThumbTack,
  faToggleOff,
  faTrash,
  faUser,
  faUserCheck,
  faUserCog,
  faUserEdit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function IconsMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>add</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAd} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>address-card</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAddressCard} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>address-book</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAddressBook} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>adjust</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAdjust} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>align-justify</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAlignJustify} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>align-left</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAlignLeft} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>angle-double-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>angle-double-right</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>angle-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAngleDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>archive</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faArchive} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>atom</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faAtom} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>backspace</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBackspace} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>bars</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBars} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>bell</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBell} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>bell-slash</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBellSlash} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>binoculars</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBinoculars} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>bolt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBolt} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>book</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBook} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>book-open</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBookOpen} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>briefcase</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBriefcase} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>broom</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBroom} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>building</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBuilding} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>bullhorn</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBullhorn} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>business-time</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faBusinessTime} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>calendar-check</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>caret-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCaretDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>caret-right</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCaretRight} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cart-arrow-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>chalkboard</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faChalkboard} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>chalkboard-teacher</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>chart-bar</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faChartBar} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>chart-line</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faChartLine} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>chart-pie</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faChartPie} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>check</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCheck} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>check-double</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCheckDouble} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>check-square</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCheckSquare} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cloud-download-alt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCloudDownload} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cloud-upload-alt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCloudUpload} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>code</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCode} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cog</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCog} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cogs</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCogs} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>copy</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCopy} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>credit-card</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCreditCard} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>crown</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCrown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>cube</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faCube} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>database</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faDatabase} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>desktop</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faDesktop} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>dollar-sign</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faDollarSign} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>dolly-flatbed</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faDollyFlatbed} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>download</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faDownload} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>edit</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faEdit} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>envelope</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faEnvelope} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>eye</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faEye} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>eye-slash</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faEyeSlash} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>fighter-jet</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFighterJet} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFile} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file-alt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFileAlt} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file-import</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFileImport} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file-pdf</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFilePdf} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file-signature</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFileSignature} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>file-upload</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFileUpload} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>flag</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFlag} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>folder</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFolder} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>folder-minus</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFolderMinus} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>folder-open</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faFolderOpen} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>globe-americas</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>hammer</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faHammer} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>hand-holding</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faHandHolding} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>home</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faHome} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>id-card</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faIdCard} />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>id-card-alt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faIdCardAlt} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>images</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faImages} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>laptop-code</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faLaptopCode} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>link</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faLink} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>list</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faList} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>list-alt</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faListAlt} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>list-ol</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faListOl} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>lock</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faLock} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>lock-open</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faLockOpen} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>mobile</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faMobile} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>money-check</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faMoneyCheck} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>mug-hot</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faMugHot} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>paste</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPaste} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>pen</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPen} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>percent</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPercent} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>phone-square</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPhoneSquare} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>plug</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPlug} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>plus-circle</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPlusCircle} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>poll</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPoll} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>poll-h</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPollH} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>power-off</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPowerOff} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>print</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faPrint} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>qrcode</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faQrcode} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>question-circle</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>retweet</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faRetweet} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>save</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSave} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>search</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSearch} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>search-minus</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSearchMinus} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>search-plus</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSearchPlus} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>share</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faShare} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>shipping-fast</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faShippingFast} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>shopping-bag</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>shopping-cart</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>sitemap</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSitemap} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>sort-alpha-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSortAlphaDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>sort-amount-down</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSortAmountDown} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>store</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faStore} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>suitcase</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSuitcase} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>sync</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faSync} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>thumbtack</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faThumbTack} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>toggle-off</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faToggleOff} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>trash</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faTrash} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>user</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faUser} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>user-check</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faUserCheck} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>user-cog</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faUserCog} />
          </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>user-edit</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FontAwesomeIcon icon={faUserEdit} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
