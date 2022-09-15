
import React, { useState } from 'react'
import CurrentPipeline from './CurrentPipeline'
import Home from './Home'
import Upload from './Upload';
import { Breadcrumb } from '@fluentui/react-northstar';
import { ChevronEndMediumIcon } from '@fluentui/react-icons-northstar'
import SelectPipeline from './SelectPipeline';
import ViewInsights from './ViewInsights';
import Search from './searchComponents/pages/Search/Search'
import AppHeader from './searchComponents/components/AppHeader/AppHeader';
import { searchHtml } from './searchHtml'
const template = { __html: searchHtml };

const theme = {
    componentVariables: {
      // 💡 `colorScheme` is the object containing all color tokens
      Header: ({ colorScheme }) => ({
        // `brand` contains all design tokens for the `brand` color
        // `foreground3` and `background3` are theme-dependent tokens that should
        // be used as value in styles, you can define own tokens 💪
      }),
      Label : ({ colorScheme }) => ({
        // `brand` contains all design tokens for the `brand` color
        color: "rgb(0, 120, 212)",
        backgroundColor: colorScheme.default.background,
        fontSize: "20px",
        height: "50px"
        // `foreground3` and `background3` are theme-dependent tokens that should
        // be used as value in styles, you can define own tokens 💪
      }),
      Breadcrumb : ({ colorScheme }) => ({
        // `brand` contains all design tokens for the `brand` color
        backgroundColor: colorScheme.default.background,
        // fontSize: "18px"
        // `foreground3` and `background3` are theme-dependent tokens that should
        // be used as value in styles, you can define own tokens 💪
      }),
    },
    componentStyles: {
      Header: {
        // 🚀 We recomend to use `colorScheme` from variables mapping
        root: ({ variables }) => ({
          color: variables.color,
          backgroundColor: variables.backgroundColor,
        }),
      },
      Label: {
        // 🚀 We recomend to use `colorScheme` from variables mapping
        root: ({ variables }) => ({
          color: variables.color,
          backgroundColor: variables.backgroundColor,
          fontSize: variables.fontSize,
          height: variables.height
        }),
      },
      Breadcrumb: {
        // 🚀 We recomend to use `colorScheme` from variables mapping
        root: ({ variables }) => ({
          backgroundColor: variables.backgroundColor,
          fontSize: variables.fontSize
        }),
      },
    },
  }


export default function Content(props) {

    const [selectedMenuItem, setSelectedMenuItem] = useState("HOME");
    const [breadCrumbItems, setBreadCrumbItems] = useState([])
    //const [userInfo, setUserInfo] = useState();

    // useEffect(() => {
    //     getUserInfo().then(value => {
    //         setUserInfo(value)
    //     })
    // }, [])

    // const getUserInfo = async () => {
    //     try {
    //         const response = await fetch('/.auth/me');
    //         const payload = await response.json();
    //         const { clientPrincipal } = payload;
    //         return clientPrincipal;
    //     } catch (error) {
    //         console.error('No profile could be found');
    //         return undefined;
    //     }
    // }

    const onBreadcrumbHome = () => {
        setSelectedMenuItem("HOME")
        setBreadCrumbItems([])
    }

    const onSelectContent = (content) => {
        console.log(content.currentTarget.id)
        switch (content.currentTarget.id) {
            case 'CONFIGURE_PIPELINE':
                setSelectedMenuItem('CONFIGURE_PIPELINE')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'Configure Pipeline', key: 'CONFIGURE_PIPELINE' })
                setBreadCrumbItems(breadCrumbItems)
                break
            case 'CURRENT_PIPELINE':
                setSelectedMenuItem('CURRENT_PIPELINE')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'View Pipeline', key: 'CURRENT_PIPELINE' })
                setBreadCrumbItems(breadCrumbItems)
                break
            case 'UPLOAD_DOCUMENTS':
                setSelectedMenuItem('UPLOAD_DOCUMENTS')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'Upload Documents', key: 'UPLOAD_DOCUMENTS' })
                setBreadCrumbItems(breadCrumbItems)
                break
            case 'VIEW_INSIGHTS':
                setSelectedMenuItem('VIEW_INSIGHTS')
                breadCrumbItems.push({ text: 'Home', key: 'home', onClick: onBreadcrumbHome })
                breadCrumbItems.push({ text: 'View Insights', key: 'VIEW_INSIGHTS' })
                setBreadCrumbItems(breadCrumbItems)
                break
            default:
                break;
        }
    }

    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'HOME':
                return (<Home onClick={onSelectContent} theme={props.theme} />)
            case 'CURRENT_PIPELINE':
                return (<CurrentPipeline theme={props.theme} />)
            case 'CONFIGURE_PIPELINE':
                return (<SelectPipeline theme={props.theme} onSelectContent={onSelectContent} />)
            case 'UPLOAD_DOCUMENTS':
                return (<Upload theme={props.theme} />)
            case 'VIEW_INSIGHTS':
                return (<><AppHeader/>
                <Search theme={props.theme} documents={[]} onSelectContent={onSelectContent} /></>
                        )

            default:
                return (<Home />)
        }
    }

    const renderBreadcrumb = () => {
        switch (selectedMenuItem) {
            case 'HOME':
                return (
                    <Breadcrumb >
                        <Breadcrumb.Item style={{ paddingLeft: "0px" }}>
                            Home
                        </Breadcrumb.Item>
                    </Breadcrumb>)
            case 'CURRENT_PIPELINE':
                return (
                    <>
                        <Breadcrumb >
                            <Breadcrumb.Item style={{ paddingLeft: "0px" }}>
                                <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb.Divider>
                            <ChevronEndMediumIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item>
                            Create Pipeline
                        </Breadcrumb.Item>
                    </>)
            case 'CONFIGURE_PIPELINE':
                return (
                    <>
                        <Breadcrumb >
                            <Breadcrumb.Item style={{ paddingLeft: "0px" }}>
                                <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb.Divider>
                            <ChevronEndMediumIcon />
                        </Breadcrumb.Divider>
                        <Breadcrumb.Item>
                            View Pipeline
                        </Breadcrumb.Item>
                    </>)
            case 'UPLOAD_DOCUMENTS':
                return (<>
                    <Breadcrumb >
                        <Breadcrumb.Item style={{ paddingLeft: "0px" }}>
                            <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb.Divider>
                        <ChevronEndMediumIcon />
                    </Breadcrumb.Divider>
                    <Breadcrumb.Item>
                        Ingest Documents
                    </Breadcrumb.Item>
                </>)

            case 'VIEW_INSIGHTS':
                return (<>
                    <Breadcrumb >
                        <Breadcrumb.Item style={{ paddingLeft: "0px" }}>
                            <Breadcrumb.Link href="" onClick={onBreadcrumbHome}>Home</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb.Divider>
                        <ChevronEndMediumIcon />
                    </Breadcrumb.Divider>
                    <Breadcrumb.Item>
                        View Insights
                    </Breadcrumb.Item>
                </>)

            default:
                return (<Home />)
        }
    }

    // const provider = "aad"
    // const redirect = window.location.pathname;
    // const showUserInfo = () => {
    //     if (userInfo) {
    //         return (<div>{JSON.stringify(userInfo)}</div>)
    //     }
    // }

    return (
        <div className="content" >
            {/* <a key={provider} href={`/.auth/login/aad?post_login_redirect_uri=${redirect}`}>
                {provider}
                {showUserInfo()}
            </a> */}
            <div style={{ paddingLeft: "0px", paddingTop: "50px", maxWidth: "1000px", minWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
                {renderBreadcrumb()}
                {renderContent()}
            </div>
        </div>
    )

}