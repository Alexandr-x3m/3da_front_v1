import { ReactElement } from 'react';

interface ActiveSlideMP {
    scroll: number,
} 

interface LogAuthProps {
    authLog: boolean 
}

interface SuccessSendProps {
    success: boolean,
    title: string,
    subtitle: string
}

interface AttentionLaneProps {
    title?: string,
    subtitle?: string,
    btn?: boolean
}

interface SliderProps {
    data: {
        id: string,
        img: string,
        title?: string,
        desc?: string,
        url: string
    }[],
    thumbnail: boolean,
    content?: Array<ReactElement>,
    swiper: boolean,
    additClass?: string,
    autoSwipe?: boolean
}

interface PositionMTouch {
    downX: number,
    downY: number,
    upX: number,
    upY: number
}

interface ServicePreviewProps {
    title: string,
    subtitle: string,
    link: string,
    img_src: string,
    reverse?: boolean
    animation: boolean
}

interface PreviewCardProps {
    id: number,
    name: string, 
    views: number,
    likes: number,
    loads: number
}

interface MoreButtonProps {
    value: string,
    onClick: Function,
    icon: boolean
}

interface PopUpProps {
    setVisibility: Function,
    content: JSX.Element,
    title?: string,
    scroll?: boolean
}

interface CounterData {
    number: number,
    text: string
}

interface CounterInfoData {
    number: number,
    text: string
}

interface CounterInfoProps {
    data: Array<CounterInfoData>
}

interface TagsList {
    id: string,
    name: string
}

interface GalleryNavigationProps {
    activeTag: string,
    setActiveTag: Function,
    tagsList: Array<TagsList>
}

interface MailFormProps {
    setMailSended: Function,
    setSuccess: Function
}

interface IconParams {
    src?: string,
    component?: JSX.Element,
}

 interface InputButtonProps {
    name?: string
    type?: string,
    value: string,
    onClick: Function,
    link?: boolean,
    additClass?: string,
    icon?: boolean,
    iconParams?: {
        src?: string,
        component?: JSX.Element,
        onClick?: Function
    },
    loading?: boolean
}

interface InfoBlockProps {
    list?: boolean,
    listData?: {
        title: string,
        subtitle: string
    }[],
    title?: string,
    description?: string,
    style: string, // style_1, style_2, style_3, style_4
    src: string,
    animation?: boolean, 
    additClass?: string
}

interface AnimatedBtnProps {
    name: string,
    additClass?: string,
}

interface MenuDataObj {
    name: string,
    icon_src: string,
    url: string
}

interface MenuProps {
    visability: boolean,
    setVisability: Function,
    data: Array<MenuDataObj>
}

interface MainNavProps {
    data1: Array<{
        address: string,
        name: string
    }>,
    activeSlide: number,
    setActiveSlide: Function
}

interface PromptProps {
    name: string,
    view: boolean
}

interface SocialIconProps {
    socialName: string,
    href: string
}

interface PriceTagProps {
    price: number
}

interface ViewBoardProps {
    count: number
    small?: boolean
}

interface InputFileProps {
    name: string,
    file: object,
    setFile: Function,
    multiple?: boolean
}



interface InputTextProps {
    name?: string
    placeholder?: string,
    value: string,
    hideValue?: boolean,
    handleValue: Function,
    label: string,
    errorText?: string,
    errorValue?: boolean,
    icon?: boolean,
    iconParams?: IconParams,
    autocomplete?: string,
    required?: boolean
}

interface InputTextareaProps {
    required?: boolean,
    label: string,
    name: string,
    value: string,
    setValue: Function
}

interface RadioInput {
    data: Array<string>
}

interface DownloadBoardProps {
    count: number
    small?: boolean
}

interface LikeBoardProps {
    onlyIcon?: boolean,
    liked: boolean,
    count: number,
}

interface SendMailContainerProps {
    setVisability: Function
}


export type { 
    ActiveSlideMP, 
    LogAuthProps, 
    SuccessSendProps, 
    AttentionLaneProps, 
    SliderProps, 
    PositionMTouch,
    ServicePreviewProps,
    PreviewCardProps,
    MoreButtonProps,
    PopUpProps,
    CounterData,
    CounterInfoData,
    CounterInfoProps,
    TagsList,
    GalleryNavigationProps,
    MailFormProps,
    IconParams,
    InputButtonProps,
    InfoBlockProps,
    AnimatedBtnProps,
    MenuDataObj,
    MenuProps,
    MainNavProps,
    PromptProps,
    SocialIconProps,
    PriceTagProps,
    ViewBoardProps,
    InputFileProps,
    InputTextProps,
    InputTextareaProps,
    RadioInput,
    DownloadBoardProps,
    LikeBoardProps,
    SendMailContainerProps,
}