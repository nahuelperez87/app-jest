import { GetProps, Text } from "tamagui";

export type BlazeTextProps = GetProps<typeof Text> & { fontFamily?: never };

export const BlazeText = (props: BlazeTextProps) => (
  <Text color="$text_primary" {...props} fontFamily="$body" />
);
