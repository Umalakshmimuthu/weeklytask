import React, {useState}  from 'react';
import { moduleName } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const Register = () => {
//    const [account, setaccount] = useState(name);
    return (
        <Screen>
        <AppTextInput  icon='account'  placeholder='name'></AppTextInput>
        <AppTextInput icon='email' placeholder='Email'></AppTextInput>
        <AppTextInput icon='lock' placeholder='Password'></AppTextInput>
        <AppButton title='Register' onPress={()=>console.log('submitted')}></AppButton>
        </Screen>
    );
}

export default Register;