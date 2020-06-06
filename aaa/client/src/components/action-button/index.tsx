import Taro, { PropsWithChildren } from "@tarojs/taro";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonEvent, BaseEventOrig } from "@tarojs/components/types/common";
import { Button } from "@tarojs/components";
import classnames from "classnames";
import "./index.scss";

type Props = ButtonProps & {
  onUserInfo?: (detail: UserInfoDetail) => void;
};

export type UserInfoDetail = ButtonProps.onGetUserInfoEventDetail;

export default function ActionButton(props: PropsWithChildren<Props>) {
  const { openType, disabled, onUserInfo }: Props = props;

  const onUserInfoEvent = (e: BaseEventOrig<UserInfoDetail>) => {
    onUserInfo && onUserInfo(e.detail);
  };

  return (
    <Button
      className={classnames("action-layout", {
        ["disabled"]: disabled
      })}
      hoverClass="action-layout-hover"
      openType={openType}
      onGetUserInfo={onUserInfoEvent}
    >
      {props.children}
    </Button>
  );
}
