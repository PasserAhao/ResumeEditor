import {ref} from "vue";
import {useStore} from "vuex"
import avatarUrl from '../assets/img/th.jpg'

export function AvatarHandle() {
    const imgUrl = ref(avatarUrl)
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
    store.commit('loadResumeState', { temId, colorsConfig })

    return {
        userinfo: store.state.userInfo,
        skillInfo: store.state.skillInfo,
        ModuleConfig: store.state.modulesConfig,
        ModuleList: store.state.resumeList
    }
}
