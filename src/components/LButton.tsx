import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
type LButton = {
    title: string;
    onPress?: (event: any) => void;
    styles?: StyleProp<ViewStyle>;
    isLoading?: boolean;
    loaderSize?: 'small' | 'large';
    loaderColor?: '' | string;
    viewStyle?: StyleProp<ViewStyle>;
    textColor?: string;
    icon?: React.ReactNode;
    iconStyle?: StyleProp<ViewStyle>;
    textTransfrom?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
};
export const LButton = ({
    title,
    onPress,
    styles,
    isLoading,
    loaderSize,
    loaderColor = '#FFFFFF',
    viewStyle,
    textColor = '#FFFFFF',
    icon,
    iconStyle,
    textTransfrom,
}: LButton) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles}>
            <View style={viewStyle}>
                {isLoading ? (
                    <ActivityIndicator size={loaderSize} color={loaderColor} />
                ) : (
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            style={{
                                color: textColor,
                                textTransform: textTransfrom,
                            }}>
                            {title}
                        </Text>
                        <View style={iconStyle}>{icon}</View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};
