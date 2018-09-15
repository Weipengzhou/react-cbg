import Link from 'next/link'
import { Component } from 'react'
import Head from '../components/head'
import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import st from 'antd/dist/antd.less';
import * as apis from '../redux/api';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { js_eval, lpc_2_js, trim } from '../components/repl'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        console.log(js_eval(lpc_2_js(trim(this.props.data.equips[0].desc))))

        const { equips } = this.props.data

        const columns = [
            { title: '等级', width: 100, dataIndex: 'equip_level', key: 'equip_level' },
            { title: 'name',  width: 100,dataIndex: 'seller_nickname', key: '2' },
            { title: '价格', width: 150, render: (e) => { return `￥${e.price}` }, key: 'price' },
            { title: '成就', width: 100, render: (e) => { 
                return js_eval(lpc_2_js(trim(e.desc))).AchPointTotal
            }, key: 'AchPointTotal' },
            { title: '祥瑞', width: 200, render: (e) => { 
                var str =''
                for(var a in js_eval(lpc_2_js(trim(e.desc))).HugeHorse){
                   str+= js_eval(lpc_2_js(trim(e.desc))).HugeHorse[a].cName+','
                }
                return str
            }, key: 'HugeHorse' },
            { title: '身上经验', width: 130, render: (e) => { 
                
                return js_eval(lpc_2_js(trim(e.desc))).iUpExp
            }, key: 'iUpExp' },
            { title: 'Column 6', dataIndex: 'address', key: '6' },
            { title: 'Column 7', dataIndex: 'address', key: '7' },
            {
                title: '门派', key: 'school', render: (e) => {

                    switch (e.school) {
                        case 1:
                            return '大唐官府';
                        case 2:
                            return '化生寺';
                        case 3:
                            return '女儿村';
                        case 4:
                            return '方寸山';
                        case 5:
                            return '天宫';
                        case 6:
                            return '普陀山';
                        case 7:
                            return '龙宫';
                        case 8:
                            return '五庄观';
                        case 9:
                            return '狮驼岭';
                        case 10:
                            return '魔王寨';
                        case 11:
                            return '地府';
                        case 12:
                            return '盘丝洞';
                        case 13:
                            return '神木林';
                        case 14:
                            return '凌波城';
                        case 15:
                            return '无底洞';
                        case 16:
                            return '女魃墓';
                        case 17:
                            return '天机城';
                        case 18:
                            return '花果山';
                    }
                }
            },
            {
                title: '历史门派', key: 'changesch', render: (e) => {
                    if(js_eval(lpc_2_js(trim(e.desc))).changesch.length==0){
                        return '无历史门派'
                    }else{
                        return js_eval(lpc_2_js(trim(e.desc))).changesch.map((e,index)=>{
                            switch (e) {
                                case 1:
                                    return '大唐官府,';
                                case 2:
                                    return '化生寺,';
                                case 3:
                                    return '女儿村,';
                                case 4:
                                    return '方寸山,';
                                case 5:
                                    return '天宫,';
                                case 6:
                                    return '普陀山,';
                                case 7:
                                    return '龙宫,';
                                case 8:
                                    return '五庄观,';
                                case 9:
                                    return '狮驼岭,';
                                case 10:
                                    return '魔王寨,';
                                case 11:
                                    return '地府,';
                                case 12:
                                    return '盘丝洞,';
                                case 13:
                                    return '神木林,';
                                case 14:
                                    return '凌波城,';
                                case 15:
                                    return '无底洞,';
                                case 16:
                                    return '女魃墓,';
                                case 17:
                                    return '天机城,';
                                case 18:
                                    return '花果山,';
                            }
                        })
                    }
                }
            },

            {
                title: '人修', key: '3', render: (e) => {
                    return <span>法术修炼:{e.expt_fashu}<br /> 攻击修炼:{e.expt_gongji}<br />抗法修炼:{e.expt_kangfa}<br />     防御修炼:{e.expt_fangyu}</span>
                }
            },
            {
                title: 'bb修', key: '4', render: (e) => {
                    return <span>法术修炼:{e.bb_expt_fashu}<br /> 攻击修炼:{e.bb_expt_gongji}<br />抗法修炼:{e.bb_expt_kangfa} <br />防御修炼:{e.bb_expt_fangyu}</span>
                }
            },


            {
                title: 'Action',
                key: 'operation',

                width: 100,
                render: () => <a>'详情'</a>
            },
        ];

        return (
            <div>
                <Layout>
                    <Head />

                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>

                            <Content style={{ padding: '0 24px', minHeight: 980 }}>
                                <Table columns={columns} dataSource={equips} scroll={{ x: 1300 }} />
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
    </Footer>
                </Layout>
                <style>
                    {st}
                </style>
            </div>
        )
    }
}


Index.getInitialProps = async function (context) {
    const res = await apis.getIndex();

    const data = await res;
    return {
        data: JSON.parse(data)

    }

}




export default Index