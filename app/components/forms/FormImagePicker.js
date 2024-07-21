import React from 'react';
import { View } from 'react-native';
import ImageInputList from '../ImageInputList';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({name}) {
    const {errors, setFieldValue, touched, values} = useFormikContext;
    const imageUris = imageUris;
    const handleAdd = (uri) => {
        
        setFieldValue(name, [...values[name ], uri]);
      }
      
    const handleRemove = (uri) => {setFieldValue(name, imageUris.filter((imageUri => imageUri !==uri)))}  
    
    return (
        <View>
            <ImageInputList imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

export default FormImagePicker;