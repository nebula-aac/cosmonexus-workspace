
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 02 Nov 2023 03:26:41 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorButtonBackgroundPrimary,
ColorButtonBackgroundSecondary,
ColorButtonBackgroundTertiary,
ColorBaseGrayLight,
ColorBaseGrayMedium,
ColorBaseGrayDark,
ColorBaseRed,
ColorBaseGreen,
ColorFontBase,
ColorFontSecondary,
ColorFontTertiary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
