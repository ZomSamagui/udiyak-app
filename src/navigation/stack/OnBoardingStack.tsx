import Stack from "src/config/global/stack.ts";
import SignInScreen from "src/screen/auth/signin";
import SignUpScreen from "src/screen/auth/signup";
import OnBoarding from "src/screen/OnBoarding";

const OnBoardingNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoarding">
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default OnBoardingNavigation;
