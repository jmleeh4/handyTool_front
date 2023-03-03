export default {
    name: "Registration",
    data(){
        return {
            id_dup : 0,
            idRule : [
                value => !!value || '아이디를 입력해주세요.',
                value => {
                    const trimValue = value.replace(/(\s*)/g, '');
                    // const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
                    return trimValue.length > 7 || '아이디는 7자리 이상입니다';
                },
                async value => {
                    const {data} = await this.axios.get(`/member/idCheck`,{
                            params : {
                                userId : value
                            }
                        }
                    ).catch( error => {
                        console.log(error);
                    })
                    return data == 0 || '이미 존재하는 아이디입니다';
                },
            ],

            pwRule : [
                value => !!value || '비밀번호를 입력하세요',
                value => {
                    const trimValue = value.replace(/(\s*)/g, '');
                    return trimValue.length > 10 || '비밀번호는 10자리 이상입니다';
                },
            ],

            userId    : "",
            password  : "",

        }
    },

}