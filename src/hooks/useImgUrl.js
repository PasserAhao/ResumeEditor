import {ref} from "vue";

export function useImgUrl(){
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
