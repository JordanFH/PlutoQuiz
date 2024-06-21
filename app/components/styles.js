import { StyleSheet, Platform } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import colors from "./colors";

const styles = StyleSheet.create({
  onBoardingUI: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    height: hp(100),
  },
  BtnNext: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: wp("100%"),
    height: 70,
    position: "absolute",
    bottom: 0,
  },
  btnText: {
    fontSize: 22,
    fontFamily: "nunbold",
    color: colors.white,
    paddingRight: 10,
  },
  slidecontainer: {
    flex: 1,
  },
  slide_shadow: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 60,
    width: wp("100%"),
    height: hp("50%"),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  slidecontent: {
    width: wp("100%"),
    height: hp("50%"),
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  slide_imagecover: {
    width: 280,
    height: 280,
    borderRadius: 1000,
    padding: 0,
    backgroundColor: "#5a6fee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  slide_image: {
    width: "100%",
    height: "100%",
  },
  slide_heading: {
    fontSize: 26,
    fontFamily: "nunbold",
    marginBottom: 20,
    textAlign: "center",
    color: colors.ash,
  },
  slide_caption: {
    fontSize: 20,
    textAlign: "center",
    color: colors.text,
    fontFamily: "nunregular",
  },
  slide_subheading: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: colors.textsm,
  },
  pagination: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationHome: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 0,
    gap: 8,
    width: "100%",
    marginHorizontal: 0,
  },
  pagItem: {
    height: 4.94,
    flex: 1,
    borderRadius: 12,
    backgroundColor: "rgb(163, 162, 166), 157, 173)",
  },
  pagItemActive: {
    height: 4.94,
    flex: 1,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  pagDot: {
    height: 6.94,
    marginHorizontal: 5,
    borderRadius: 12,
    backgroundColor: colors.pagination,
    width: 34,
  },
  pagDotActive: {
    backgroundColor: colors.primary,
  },
  onboardingactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  skipbtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  skipbtnText: {
    paddingHorizontal: 18,
    color: colors.dim,
    fontFamily: "nunbold",
    fontSize: 18,
    paddingVertical: 14,
  },
  nextBtn: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 14,
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Android shadow property
    elevation: 5,
  },
  nextBtnText: {
    paddingHorizontal: 18,
    color: colors.white,
    fontFamily: "nunbold",
    fontSize: 18,
    paddingVertical: 14,
  },
  authBlock: {
    width: "100%",
    backgroundColor: "#293fcc",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 30,
    elevation: 4,
  },
  authBlockNoCurve: {
    width: "100%",
    backgroundColor: "#293fcc",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 20,
    paddingBottom: 80,
    elevation: 4,
  },
  authBlockbg: {
    position: "absolute",
    width: wp(100),
    height: 200,
    opacity: 0.3,
  },
  applogo: {
    height: 100,
    width: "50%",
  },
  fullpageImg: {
    position: "absolute",
    width: wp(100),
    height: hp(100),
    opacity: 0,
  },
  authIntro: {
    fontSize: 30,
    fontFamily: "nunbold",
    color: colors.white,
  },
  authSummaryBlock: {
    paddingVertical: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  authSummaryText: {
    fontSize: 16,
    fontFamily: "nunregular",
    color: colors.white,
    paddingRight: 6,
  },
  authlinkText: {
    fontSize: 16,
    fontFamily: "nunbold",
    color: colors.secondary,
  },
  boxstyles: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("87%"),
    backgroundColor: "#364dd9",
    height: 50,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 30,
    marginTop: -30,
    zIndex: -1,
  },
  boxstyle1: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("75%"),
    backgroundColor: "#556bf2",
    height: 34,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 30,
    marginTop: -16,
    zIndex: -10,
  },
  authPage: {
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 50,
  },
  scrollbg: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  formbox: {
    paddingVertical: 8,
  },
  formlabel: {
    paddingBottom: 10,
    fontSize: 14,
    color: "#424d53",
    fontFamily: "nunbold",
  },
  formicon: {
    position: "absolute",
    left: 16,
    zIndex: 1,
    top: 15,
  },
  formInput: {
    flex: 1,
    backgroundColor: "#f4f7f9",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f6f6f7",
    paddingLeft: 49,
    fontSize: 16,
    fontFamily: "nunregular",
    color: colors.inputcolor,
  },
  formInputNoIcon: {
    flex: 1,
    backgroundColor: colors.defaultbg,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f6f6f7",
    paddingLeft: 14,
    fontSize: 16,
    fontFamily: "nunregular",
    color: colors.inputcolor,
  },
  formbtn: {
    marginTop: 10,
    marginBottom: 50,
  },
  SlideBtn: {
    flex: 1,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#2030cc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  SlideBtnDisabled: {
    flex: 1,
    height: 50,
    backgroundColor: colors.defaultbg,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  appBtn: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 14,
    shadowColor: "#2030cc",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  appBtnText: {
    paddingHorizontal: 18,
    color: colors.white,
    fontFamily: "nunbold",
    fontSize: 18,
    paddingVertical: 14,
  },
  appBtnTextIcon: {
    color: colors.white,
    fontFamily: "nunbold",
    fontSize: 18,
    paddingVertical: 14,
  },
  forgetpasswordText: {
    textAlign: "right",
    fontFamily: "nunbold",
    fontSize: 18,
    color: colors.secondary,
  },
  ScrollFlex: {
    flexGrow: 1,
    backgroundColor: colors.defaultbg,
  },
  ViewScrollFlex: {
    paddingBottom: 30,
  },
  AppHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 20,
    zIndex: 10,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 12,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 20,
    zIndex: 10,
    paddingTop: Platform.OS === "ios" ? 0 : 0,
  },
  headerTopImg: {
    height: 30,
    width: 30,
    borderRadius: 12,
  },
  headerTouchIcon: {
    height: 40,
    width: 40,
    flexDirection: "row",
    backgroundColor: "#3c56f2",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  headerSummaryBlock: {
    paddingVertical: 8,
    flexDirection: "column",
    paddingBottom: 50,
  },
  headerSummaryText: {
    fontSize: 16,
    fontFamily: "nunregular",
    color: colors.white,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "nunbold",
    color: colors.white,
  },
  headerIntro: {
    fontSize: 26,
    fontFamily: "nunbold",
    fontFamily: "nunbold",
    color: colors.white,
  },
  createActions: {
    paddingHorizontal: 0,
    marginTop: -60,
  },
  createActionsSlide: {
    flexDirection: "row",
    gap: 14,
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
  },
  createItem: {
    backgroundColor: colors.orange,
    paddingVertical: 14,
    borderRadius: 10,
    borderCurve: "continuous",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 150,
  },
  createItemTitle: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "nunregular",
  },
  createItemSubtitle: {
    fontSize: 30,
    color: colors.white,
    fontFamily: "nunbold",
  },
  createItemBtn: {
    backgroundColor: colors.mainbg,
    marginTop: 16,
    alignItems: "center",
    borderRadius: 8,
    borderCurve: "continuous",
    paddingVertical: 5,
    width: wp(20),
  },
  viewHomeItems: {
    paddingHorizontal: 20,
  },
  viewHomeItemsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
    alignItems: "center",
  },
  viewHomeItemsTopTitle: {
    fontSize: 20,
    fontFamily: "nunbold",
    color: colors.dim,
  },
  viewHomeItemsTopSubTitle: {
    fontSize: 16,
    fontFamily: "nunbold",
    color: colors.secondary,
  },
  viewHomeItemsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 38,
    alignItems: "center",
    gap: 30,
  },
  viewHomeItem: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 0.7,
    padding: 15,
    height: 120,
  },
  viewHomeItem3dImage: {
    height: 100,
    aspectRatio: 1,
    position: "absolute",
    top: -30,
  },
  viewHomeItemText: {
    fontSize: 18,
    fontFamily: "nunbold",
    color: colors.tabdefault,
  },
  pageViewFlex: {
    marginHorizontal: 12,
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderCurve: "continuous",
    flexDirection: "column",
    gap: 13,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: -70,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  notificationItem: {
    backgroundColor: "#fafafc",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderCurve: "continuous",
  },
  notificationItemIcon: {
    height: 45,
    width: 45,
    backgroundColor: colors.orange,
    borderRadius: 8,
    borderCurve: "continuous",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationItemText: {
    color: colors.dim,
    fontSize: 16,
    fontFamily: "nunbold",
  },
  notificationItemSubText: {
    color: colors.dim,
    fontSize: 14,
    fontFamily: "nunlight",
  },
  profileView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    gap: 12,
    marginBottom: 10,
  },
  profileIcon: {
    height: 70,
    width: 70,
    borderColor: colors.white,
    borderWidth: 6,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 18,
    fontFamily: "nunbold",
    color: colors.dim,
    paddingBottom: 3,
  },
  profileEdit: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    gap: 6,
  },
  profileEditText: {
    fontSize: 14,
    color: colors.primary,
  },
  profileBtnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    gap: 12,
    marginTop: 18,
    marginBottom: 10,
  },
  profileBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  profileBtnText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "nunbold",
  },
  badgeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  badgeGradient: {
    flex: 1,
    height: 155,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  badgeViewTitle: {
    fontSize: 18,
    fontFamily: "nunbold",
    color: colors.dim,
  },
  badgePoint: {
    fontSize: 24,
    color: colors.white,
    fontFamily: "nunbold",
    paddingBottom: 4,
    paddingTop: 5,
  },
  badgePointName: {
    fontSize: 14,
    color: colors.white,
    fontFamily: "nunregular",
  },
  badgePointImage: {
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  badgeList: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    //justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  badgeItem: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    height: 50,
    width: 50,
  },
  badgeImage: {
    width: 40,
    height: 40,
  },
  rankItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  rankIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#ffd201",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  rankItemTitle: {
    color: "#9399a2",
    fontSize: 13,
    paddingBottom: 4,
  },
  rankItemText: {
    color: colors.dim,
    fontSize: 12,
    fontFamily: "nunbold",
  },
  lboardTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0090f8",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 4,
  },
  lboardTabsitem: {
    flex: 1,
  },
  lboardTabsitemactive: {
    backgroundColor: "#14d8ff",
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    height: 42,
    justifyContent: "center",
    flex: 1,
  },
  lboardTabsitemtext: {
    color: colors.white,
    fontFamily: "nunbold",
    textAlign: "center",
  },
  boardImageView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginTop: 30,
  },
  boardImages: {
    height: 110,
    width: 110,
    borderColor: "#fafafc",
    borderWidth: 3,
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    marginBottom: 8,
  },
  boardlead: {
    justifyContent: "center",
    alignItems: "center",
  },
  boardScore: {
    fontSize: 16,
    fontFamily: "nunbold",
    color: colors.white,
  },
  boardName: {
    fontSize: 20,
    fontFamily: "nunbold",
    color: colors.secondary,
    paddingBottom: 3,
  },
  boardBadge: {
    height: 30,
    width: 30,
    backgroundColor: "#ffd201",
    borderColor: "#ebbc0f",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
    marginTop: -23,
    marginBottom: 4,
  },
  boardBadgeText: {
    fontSize: 20,
    color: "#dd3912",
    fontFamily: "nunbold",
  },
  boardList: {
    flexDirection: "column",
    gap: 13,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  boardListItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    borderCurve: "continuous",
    borderColor: colors.mainbg,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  boardListItemView: {
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  boardListItemCount: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: "nunbold",
  },
  boardListItemImgView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  boardListItemImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 14,
  },
  boardListItemName: {
    color: "#2d4160",
    fontFamily: "nunbold",
    fontSize: 16,
  },
  boardListItemScore: {
    color: colors.secondary,
    fontFamily: "nunbold",
    fontSize: 16,
  },
  ChallangeView: {
    justifyContent: "center",
    alignItems: "center",
  },
  ChallangeIcon: {
    height: 80,
    aspectRatio: 1,
    borderColor: "#e8eaf7",
    borderWidth: 6,
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  ChallangeName: {
    fontFamily: "nunbold",
    color: colors.dim,
  },
  scanImg: {
    height: hp(40),
    width: wp(100),
  },
  notificationsViewFlex: {
    marginHorizontal: 12,
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderCurve: "continuous",
    flexDirection: "column",
    gap: 13,
    paddingVertical: 20,
    paddingHorizontal: 14,
    marginTop: -70,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  notificationsView: {
    flexDirection: "column",
    gap: 15,
  },
  notificationsListItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    //alignItems: "center",
    borderBottomColor: "#f4f4f5",
    borderBottomWidth: 1,
  },
  flex_one: {
    flex: 1,
  },
  notificationsListItemTitle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "nunbold",
    flex: 1,
  },
  notificationsListItemContent: {
    color: colors.black,
    fontSize: 13,
    fontFamily: "nunregular",
    paddingVertical: 8,
    flex: 1,
  },
  notificationsListItemDate: {
    color: colors.black,
    fontSize: 10,
    fontFamily: "nunlight",
  },
  notificationsListItemTop: {
    flexDirection: "row",
  },
  pageCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  findIconImage: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  BuilderTitle: {
    color: "#424d53",
    fontSize: 20,
    fontFamily: "nunbold",
  },
  answersGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.defaultbg,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  answersGroupRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.defaultbg,
    borderRadius: 12,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: colors.defaultbg,
  },
  answersInput: {
    flex: 1,
    height: 50,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: colors.inputcolor,
  },
  answerCheck: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  answerDefault: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.dim2,
  },
  navigationButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 30,
    gap: 50,
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  builderFinishPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  builderFinishPageView: {
    width: "90%",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 12,
  },
  builderFinishImageView: {
    width: 80,
    height: 80,
    padding: 0,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    zIndex: 10,
  },
  builderFinishImage: {
    height: 180,
    aspectRatio: 1,
  },
  builderFinishListView: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    gap: 10,
  },
  builderFinishListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.app_dark_bg,
    borderBottomWidth: 1,
    paddingVertical: 8,
    gap: 30,
  },
  builderFinishItemName: {
    fontFamily: "nunregular",
    fontSize: 14,
    fontWeight: "semibold",
    color: colors.darktext,
    textAlign: "left",
  },
  builderFinishItemVal: {
    textAlign: "right",
    fontSize: 14,
    fontFamily: "nunbold",
    color: colors.primary,
  },
  sideBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    gap: 30,
  },
  ColumnBtns: {
    flexDirection: "column",
    gap: 14,
    marginTop: 8,
  },
  quizFound: {
    fontFamily: "nunbold",
    fontSize: 20,
    textAlign: "center",
  },
  quizFoundName: {
    backgroundColor: "#d4d9f6",
    borderRadius: 14,
    marginTop: 20,
  },
  quizFoundNameContent: {
    fontFamily: "nunbold",
    fontSize: 18,
    textAlign: "center",
    padding: 16,
    color: colors.primary,
  },
  quizFoundUser: {
    marginTop: 30,
    fontSize: 16,
    color: colors.darktext,
  },
  quizFoundUserView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.defaultbg,
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
    borderColor: colors.mainbg,
    borderWidth: 1,
  },
  quizFoundUserImg: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 20,
  },
  quizFoundUserName: {
    fontFamily: "nunbold",
    fontSize: 18,
    color: colors.darktext,
  },
  quizFoundUserSubText: {
    fontFamily: "nunregular",
    fontSize: 14,
    fontWeight: "semibold",
    color: colors.darktext,
  },
  quizFoundAbout: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darktext,
  },
  quizFoundAboutContent: {
    borderColor: colors.mainbg,
    borderWidth: 1,
    backgroundColor: colors.defaultbg,
    borderRadius: 14,
    marginTop: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  profileList: {
    flexDirection: "column",
  },
  profileListTitle: {
    fontSize: 16,
    marginTop: 12,
  },
  profileListItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 10,
    borderColor: colors.mainbg,
    borderWidth: 0.5,
  },
  profileListItemIcon: {
    backgroundColor: "#5a6fee",
    height: 40,
    width: 40,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  profileListItemText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "semibold",
    fontFamily: "nunregular",
  },
  buildInfo: {
    alignContent: "center",
    alignSelf: "center",
    marginTop: 18,
  },
  buildVersion: {
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 5,
  },
  developer: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "nunbold",
    color: colors.primary,
  },
  startquizView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 40,
  },
  startquizTitle: {
    flex: 1,
    fontSize: 24,
    color: colors.white,
  },
  timerbadge: {
    borderRadius: 8,
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 4,
    gap: 6,
  },
  timerbadgeText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "nunbold",
  },
  quizQuestionTitle: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "nunbold",
    marginBottom: 10,
    paddingTop: 12,
  },
  quizQuestionAnswers: {
    flexDirection: "column",
    gap: 12,
  },
  quizQuestionAnswersList: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: "#7d8388",
    fontFamily: "nunregular",
    flex: 1,
    width: "80%",
  },
  quizQuestionAnswerGradient: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  ansSel: {
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.defaultbg,
  },
  ansDefault: {
    borderWidth: 2,
    borderColor: colors.defaultbg,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: colors.defaultbg,
  },
  questionPagination: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  questionPagDefault: {
    flex: 1,
    height: 6,
    width: 10,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  questionPagActive: {
    flex: 1,
    height: 6,
    width: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  quizTakerFinish: {
    width: "100%",
    paddingVertical: 20,
    marginTop: 30,
  },
  quizTakerFinishImgView: {
    width: 180,
    height: 180,
    borderRadius: 1000,
    padding: 0,
    backgroundColor: "#5a6fee",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: colors.secondary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 10,
  },
  quizTakerFinishImg: {
    height: 250,
    aspectRatio: 1,
  },
  quizTakerFinishScoreBoard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    gap: 8,
  },
  quizTakerFinishBoardItem: {
    backgroundColor: "#ffb21b",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  quizTakerFinishBoardItemTitle: {
    fontSize: 30,
    fontFamily: "nunbold",
    color: colors.white,
  },
  quizTakerFinishBoardItemTitleName: {
    fontSize: 12,
    fontFamily: "nunbold",
    color: colors.white,
  },
  quizEndPage: {
    flex: 1,
    paddingTop: 60,
  },
  quizEndTitle: {
    fontSize: 24,
    color: colors.darktext,
    textAlign: "center",
    fontFamily: "nunbold",
    paddingBottom: 12,
    paddingTop: 20,
  },
  quizEndSubTitle: {
    fontSize: 18,
    color: colors.darktext,
    textAlign: "center",
    fontFamily: "nunregular",
  },
  quizEndPointView: {
    marginTop: 14,
    backgroundColor: colors.white,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  quizEndPoint: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "nunbold",
    color: colors.primary,
  },
  quizEndBox: {
    backgroundColor: colors.white,
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.skyblue,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 12,
  },
  quizModal: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: Platform.OS === "ios" ? 60 : 30,
  },
  quizModalTitle: {
    fontFamily: "nunbold",
    fontSize: 23,
    textAlign: "center",
    color: colors.white,
  },
  quizModalQuit: {
    height: 40,
    width: 40,
    backgroundColor: "#5a6fee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  quizModalView: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  quizModalQuestion: {
    marginVertical: 12,
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: colors.skyblue,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  quizModalQuestionTitle: {
    fontSize: 18,
    fontFamily: "nunbold",
    textAlign: "center",
    paddingBottom: 12,
  },
  quizModalAnswerView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
});

export { styles };
