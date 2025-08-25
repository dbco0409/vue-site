<template>
    <div>
        <div class="input-group">
            <h5>체크인 날짜<span class="red">*</span></h5>
            <input type="text" id="start" placeholder="체크인 날짜를 입력하세요.">
        </div>
        <div class="input-group">
            <h5>체크아웃 날짜<span class="red">*</span></h5>
            <input type="text" id="end" placeholder="체크아웃 날짜를 입력하세요.">
        </div>
        <div class="input-group">
            <h5>객실 선택</h5>
            <select>
                <option>STANDARD DOUBLE</option>
                <option>DELUXE TRIPLE</option>
                <option>DELUXE FAMILY</option>
                <option>JUNIOR SUITE</option>
                <option>ONDOL SUITE</option>
                <option>PRESIDENTIAL SUITE</option>
            </select>
        </div>
        <div class="input-group">
            <h5>예약자 성함<span class="red">*</span></h5>
            <input type="text" id="end" placeholder="예약자 성함을 입력하세요.">
        </div>
        <button type="button" class="btn">예약하기</button>
    </div>
</template>