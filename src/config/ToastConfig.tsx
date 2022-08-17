import { BaseToast, ToastProps } from "react-native-toast-message";

import { defaultTheme } from "~/utils/theme";

export const ToastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: defaultTheme.COLORS.PRIMARY_COLOR }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "400",
        color: defaultTheme.COLORS.PRIMARY_COLOR,
      }}
    />
  ),
};
