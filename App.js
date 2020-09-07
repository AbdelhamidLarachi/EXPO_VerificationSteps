//
//  App.js
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 clean-ui. All rights reserved.
//

import * as Font from "expo-font"
import PhotoVerification from "./App/PhotoVerification/PhotoVerification"
import Complete from "./App/Complete/Complete"
import DocumentsUpload from "./App/DocumentsUpload/DocumentsUpload"
import PersonalDetails from "./App/PersonalDetails/PersonalDetails"
import Questionary from "./App/Questionary/Questionary"
import React from "react"
import SelectDocument from "./App/SelectDocument/SelectDocument"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"


const PushRouteOne = createStackNavigator({
	PersonalDetails: {
		screen: PersonalDetails,
	},
	SelectDocument: {
		screen: SelectDocument,
	},
	DocumentsUpload: {
		screen: DocumentsUpload,
	},
	PhotoVerification: {
		screen: PhotoVerification,
	},
	Questionary: {
		screen: Questionary,
	},
	Complete: {
		screen: Complete,
	},
}, {
	initialRouteName: "PersonalDetails",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
