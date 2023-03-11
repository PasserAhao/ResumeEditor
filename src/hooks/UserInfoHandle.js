import {ref} from "vue";
import {useStore} from "vuex"

export function userInfoHandle() {
    const imgUrl = ref(require('../assets/img/th.jpg'))
    const imgInput = ref()
    const openFile = () => {
        imgInput.value.dispatchEvent(new MouseEvent('click'))
    }
    const getImageUrl = (e) => {
        // 上传的文件
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            imgUrl.value = String(reader.result)
        }
    }
    return {
        imgInput, imgUrl,
        openFile, getImageUrl,
    }
}

export function initInfo(temId,colorsConfig) {
    const store = useStore()
    // 用户基本信息更新
    const userinfo = store.state.userInfo
    const data1 = localStorage.getItem("userinfo")
    if (String(data1) !== "null" && String(data1) !== "undefined") {
        let data = JSON.parse(data1)
        for (let key in data) {
            if(key !== "job"){
                userinfo[key] = data[key]
            }else {
                console.log("asdasd")
                userinfo["job"] = []
                for (let item of data["job"]){
                    userinfo["job"].push(item)
                }
            }
        }
    }


    // 技能信息更新
    const skillInfo = store.state.skillInfo
    const data2 = localStorage.getItem("skillInfo")
    if (String(data2) !== "null" && String(data2) !== "undefined") {
        let data = JSON.parse(data2)
        for (let key in data) {
            skillInfo[key] = data[key]
        }
    }


    // 模快初始配置
    const ModuleConfig = store.state.modulesConfig
    const data3 = localStorage.getItem("ModuleConfig")
    if (String(data3) !== "null" && String(data3) !== "undefined") {
        let data = JSON.parse(data3)
        ModuleConfig.splice(0, ModuleConfig.length)
        for (let item of data) {
            ModuleConfig.push(item)
        }
    }


    // 简历展示模块
    const data4 = localStorage.getItem("ModuleList")
    const ModuleList = store.state.resumeList
    if (String(data4) !== "null" && String(data4) !== "undefined") {
        let data = JSON.parse(data4)
        ModuleList.splice(0, ModuleList.length)
        for (let item of data) {
            ModuleList.push(item)
        }
    }


    const data5 = localStorage.getItem(`${temId}_color`)
    if (String(data5) !== "null" && String(data5) !== "undefined"){
        let data = JSON.parse(data5)
        colorsConfig.splice(0,colorsConfig.length)
        for (let item of data){
            colorsConfig.push(item)
        }
    }

    return {
        userinfo, skillInfo, ModuleConfig, ModuleList
    }
}
