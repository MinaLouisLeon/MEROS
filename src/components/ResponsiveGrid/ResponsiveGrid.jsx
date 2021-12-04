// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import './ResponsiveGrid.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import {TitleBar} from 'react-desktop/macOs';
const ResponsiveGridLayout = WidthProvider(Responsive);
const ResponsiveGrid = () => {

    return(
        <ResponsiveGridLayout 
            className="layout"
            breakpoints={{lg:1200}}
            cols={{lg:24}}
            allowOverlap={true}
            rowHeight={10}
            isDraggable={true}
            isResizable={true}
            draggableHandle='.class-for-hande-drag'
            // useCSSTransforms={true}
            >
            <div className='app-view br2 shadow-2' key='1' data-grid={{x:1,y:2,w:15,h:15}} >
                <TitleBar className='class-for-hande-drag' 
                    title='Settings'
                    controls
                />
            </div>
        </ResponsiveGridLayout>
    )
}

export default ResponsiveGrid;