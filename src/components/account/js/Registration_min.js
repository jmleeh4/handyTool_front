export default {
    name: "Registration",
    data(){
        return {
            id_dup : 0,
            idRule : [
                value => !!value || '아이디를 입력해주세요.',
                value => {
                    const trimValue = value.replace(/(\s*)/g, '');
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
                    const number    = trimValue.search(/[0-9]/g);
                    const english   = trimValue.search(/[a-z]/ig);
                    const spece     = trimValue.search(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g);

                    if(trimValue.length < 10){
                        return '비밀번호는 10자리 이상입니다';
                    }else if(number < 0 || english < 0 || spece < 0 ){
                        return '영문, 숫자, 특수문자를 혼합하여 입력해주세요';
                    }else if(trimValue.search(/\s/) != -1){
                        return '비밀번호는 공백없이 입력해주세요';
                    }else{
                        return true;

                    }
                }
            ],
            //이메일 룰
            emailRule : [
                value => {
                    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
                    return regExp.test(value) || "잘못된 이메일 형식입니다";
                }
            ],
            //네임 룰
            nameRule : [
                value => {
                    const reg = /^[가-힣]{2,4}$/;
                    return reg.test(value) || "한글 2~4자 이내";
                }
            ],
            confPw : [
                value => this.password == value || '비밀번호를 확인하세요'
            ],

            dobRules: [
                v => !!v || '생년월일을 입력해주세요',
            ],

            userId      : "",               //유저아이디
            password    : "",               //비밀번호
            userName    : "",               //유저이름
            email       : "",               //이메일
            birthday    : "",               //생일
            menu        : false

        }
    },
    methods : {
        save(birthday) {
            console.log(birthday);
        }
    }

}