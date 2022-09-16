import ImageColors from 'react-native-image-colors'

export const geImageColor = async (uri: string) => {

    const color = await ImageColors.getColors(uri, {});


    let primary, secondary;
    if (color.platform === 'android') {
        primary = color.dominant;
        secondary = color.average;
    } else {
        primary = 'trasparent';
        secondary = 'trasparent';
    }

    return { primary, secondary };

}