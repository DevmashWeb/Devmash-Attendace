var students = ["Anurag ",
    "Asha ",
    "Nagamani ",
    "Deeksha ",
    "Anushri ",
    "Aditya",
    "Yash ",
    "Soham ",
    "Tejaswini",
    "Shubhani ",
    "M S Swaroop",
    "N V Praneesha ",
    "Afra ",
    "Aishwarya ",
    "Akash ",
    "Akash ",
    "Akshat ",
    "Akshatha ",
    "Akshay ",
    "AMAN ",
    "Anusha ",
    "aparth ",
    "archit ",
    "Arushi ",
    "Aryan ",
    "Ayush ",
    "Deepak ",
    "Dibyo ",
    "gaurav ",
    "Harshitha ",
    "Yeseswini ",
    "Lohith ",
    "Madhushree ",
    "mani ",
    "Mohana ",
    "Karthik ",
    "Prayashi ",
    "RAHUL ",
    "Rajat ",
    "Rishi ",
    "ROHITH ",
    "sathish ",
    "Shashank ",
    "Shubh ",
    "Shubham ",
    "Shyamala ",
    "Simran ",
    "Sindhu ",
    "sirisha ",
    "spoorthi ",
    "Srinivas ",
    "Srivatsa ",
    "Sujay ",
    "Surabhi ",
    "Sweta ",
    "Tilak ",
    "Vaibhav ",
    "Vandana ",
    "veekshita ",
    "Vishwanatha ",
    "Vishwas ",
    "Y V N Sirisha "
];

var winnersList = ["Soham", "Simran", "Dibyo", "Rahul", "Tilak","Anurag","Sweta","Kothari","Prameet","Vishwas MS","shyamala ","surabhi ","vandshe ","prayashi"]

var attended = [];
var absent = [];
var absentHtml = "";

students.diff = function(a) {
    return this.filter(function(i) {
        return a.indexOf(i) < 0;
    });
};

$(document).ready(function() {

    // Printing all the Students' Name in the DOM
    students.forEach(function(el, index) {
        $("#list").append('<li class="student">' + el + '</li>');
    });


    animateInStudents("list");
    // Animating them in

    // Function Attendace thing
    $(".student").on('click', function() {
        $(this).css('background-color', 'black').addClass('present');
        attended.push($(this).text());
    });

    //  Show the absent list
    $('#absent').click(function(event) {
      console.log("absent clicked");
      console.log(attended);
        $('#absentees-list').html("")
        absent = students.diff(attended);
        $('#list').slideUp().delay(300).html("");
//
            absent.forEach(function(el, index) {

                $('#absentees-list').append('<li class="student">' + el + '</li>');
                console.log("student added to absent");
            });
        animateInStudents("absentees-list");
    });

    //  Show the winners list
    $('#winner').click(function(event) {
      console.log("winner clicked");
        $('#absentees-list').html("")
        $('#list').slideUp().delay(300).html("");

            winnersList.forEach(function(el, index) {

                $('#winner-list').append('<li class="student">' + el + '</li>');
                console.log("student added to winners");
            });
        animateInStudents("winner-list");
    });


});

    // function to animate
    function animateInStudents(studentList) {
      console.log('#'+studentList+' .student');
        $('#'+studentList+' .student').each(function(index, el) {
            setTimeout(function() {
                $(".student").eq(index).addClass('is-visible');
            }, index * 100);
        });
    }
