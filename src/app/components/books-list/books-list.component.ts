import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Book } from "../../models/book";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
  constructor() {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["title", "author", "availableCopies", "dateOfRelease"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onReservationClick(book: any) {
    console.log(book);
  }
}

const ELEMENT_DATA: Book[] = [
  {
    isbn: "9780439023480",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    dateOfRelease: 1199149200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439554930",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    dateOfRelease: 852080400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780061120080",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    dateOfRelease: -315615600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780743273560",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    dateOfRelease: -1420066800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780525478810",
    title: "The Fault in Our Stars",
    author: "John Green",
    dateOfRelease: 1325379600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781416524790",
    title: "Angels & Demons ",
    author: "Dan Brown",
    dateOfRelease: 946688400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780679783270",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    dateOfRelease: -4954431600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781594480000",
    title: "The Kite Runner ",
    author: "Khaled Hosseini",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780062024040",
    title: "Divergent",
    author: "Veronica Roth",
    dateOfRelease: 1293843600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780451524940",
    title: "Nineteen Eighty-Four",
    author: "George Orwell, Erich Fromm",
    dateOfRelease: -662684400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780452284240",
    title: "Animal Farm: A Fairy Story",
    author: "George Orwell",
    dateOfRelease: -788914800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780553296980",
    title: "Het Achterhuis: Dagboekbrieven 14 juni 1942 - 1 augustus 1944",
    author: "Anne Frank, Eleanor Roosevelt, B.M. Mooyaart-Doubleday",
    dateOfRelease: -725842800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307269750",
    title: "The Girl with the Dragon Tattoo (Millennium, #1)",
    author: "Stieg Larsson, Reg Keeland",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439023500",
    title: "Catching Fire",
    author: "Suzanne Collins",
    dateOfRelease: 1230771600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439655480",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling, Rufus Beck",
    dateOfRelease: 915152400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780618346260",
    title: " The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    dateOfRelease: -504918000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439023510",
    title: "Mockingjay",
    author: "Suzanne Collins",
    dateOfRelease: 1262307600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439358070",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316166680",
    title: "The Lovely Bones",
    author: "Alice Sebold",
    dateOfRelease: 1009846800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439064870",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    dateOfRelease: 883616400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439139600",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    dateOfRelease: 946688400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780545010220",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    dateOfRelease: 1167613200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307277670",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439785970",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780140283330",
    title: "Lord of the Flies ",
    author: "William Golding",
    dateOfRelease: -504918000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780743477120",
    title: "An Excellent conceited Tragedie of Romeo and Juliet",
    author: "William Shakespeare, Robert Jackson",
    dateOfRelease: -11833858800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780297859380",
    title: "Gone Girl",
    author: "Gillian Flynn",
    dateOfRelease: 1325379600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780399155340",
    title: "The Help",
    author: "Kathryn Stockett",
    dateOfRelease: 1230771600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142000670",
    title: "Of Mice and Men ",
    author: "John Steinbeck",
    dateOfRelease: -1041375600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780739326220",
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    dateOfRelease: 852080400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781612130290",
    title: "Fifty Shades of Grey",
    author: "E.L. James",
    dateOfRelease: 1293843600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780061122420",
    title: "O Alquimista",
    author: "Paulo Coelho, Alan R. Clarke",
    dateOfRelease: 567997200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780385732550",
    title: "The Giver",
    author: "Lois Lowry",
    dateOfRelease: 725850000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780060764890",
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    dateOfRelease: -631148400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780965818670",
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780553588480",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    dateOfRelease: 820458000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780143038410",
    title:
      "Eat, pray, love: one woman's search for everything across Italy, India and Indonesia",
    author: "Elizabeth Gilbert",
    dateOfRelease: 1136077200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780786838650",
    title: "The Lightning Thief",
    author: "Rick Riordan",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780451529300",
    title: "Little Women",
    author: "Louisa May Alcott",
    dateOfRelease: -3218828400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142437210",
    title: "Jane Eyre",
    author: "Michael Mason",
    dateOfRelease: -3881516400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780553816720",
    title: "The Notebook",
    author: "Nicholas Sparks",
    dateOfRelease: 820458000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780770430080",
    title: "Life of Pi",
    author: "Yann Martel",
    dateOfRelease: 978310800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781565125600",
    title: "Water for Elephants",
    author: "Sara Gruen",
    dateOfRelease: 1136077200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780375831000",
    title: "The Book Thief",
    author: "Markus Zusak",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307347980",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    dateOfRelease: -536454000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316160190",
    title: "New Moon (Twilight, #2)",
    author: "Stephenie Meyer",
    dateOfRelease: 1136077200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780060513030",
    title:
      "Where the Sidewalk Ends: The Poems and Drawings of Shel Silverstein",
    author: "Shel Silverstein",
    dateOfRelease: 126234000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781416914280",
    title: "City of Bones",
    author: "Cassandra Clare",
    dateOfRelease: 1167613200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316160210",
    title: "Eclipse",
    author: "Stephenie Meyer",
    dateOfRelease: 1167613200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780375826700",
    title: "Eragon",
    author: "Christopher Paolini",
    dateOfRelease: 1009846800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780345391800",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    dateOfRelease: 284000400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780060929880",
    title: "Brave New World",
    author: "Aldous Huxley",
    dateOfRelease: -1199228400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316067930",
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    dateOfRelease: 1199149200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142001740",
    title: "The Secret Life of Bees",
    author: "Sue Monk Kidd",
    dateOfRelease: 978310800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142437180",
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain, John Seelye, Guy Cardwell",
    dateOfRelease: -2713906800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780064410940",
    title: "Charlotte's Web",
    author: "E.B. White, Garth Williams, Rosemary Wells",
    dateOfRelease: -568076400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781400032720",
    title: "The Curious Incident of the Dog in the Night-Time",
    author: "Mark Haddon",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781594633670",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    dateOfRelease: 1420074000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780679879240",
    title: "Northern Lights",
    author: "Philip Pullman",
    dateOfRelease: 788922000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780393978900",
    title: "Wuthering Heights",
    author: "Richard J. Dunn",
    dateOfRelease: -3881516400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780743454540",
    title: "My Sister's Keeper",
    author: "Jodi Picoult",
    dateOfRelease: 1072918800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780385333850",
    title:
      "Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death ",
    author: "Kurt Vonnegut Jr.",
    dateOfRelease: -31532400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780446675540",
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    dateOfRelease: -1072998000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781594489500",
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    dateOfRelease: 1167613200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780671027350",
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    dateOfRelease: 915152400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780007442910",
    title: "Insurgent",
    author: "Veronica Roth",
    dateOfRelease: 1325379600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780812550700",
    title: "Ender's Game",
    author: "Orson Scott Card",
    dateOfRelease: 473389200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780141439470",
    title: "Frankenstein or The Modern Prometheus",
    author: "Mary Wollstonecraft Shelley, Percy Bysshe Shelley, Maurice Hindle",
    dateOfRelease: -4796665200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780450040180",
    title: "The Shining",
    author: "Stephen King",
    dateOfRelease: 220928400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780316068050",
    title: "The Host",
    author: "Stephenie Meyer",
    dateOfRelease: 1199149200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142402510",
    title: "Looking for Alaska",
    author: "John Green",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780140280100",
    title: "Bridget Jones's Diary",
    author: "Helen Fielding",
    dateOfRelease: 820458000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780141439660",
    title: "Sense and Sensibility",
    author: "Jane Austen, Tony Tanner, Ros Ballaster",
    dateOfRelease: -5017590000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780439244190",
    title: "Holes",
    author: "Louis Sachar, Louis Sachar",
    dateOfRelease: 883616400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307275550",
    title: "The Devil Wears Prada",
    author: "Lauren Weisberger",
    dateOfRelease: 1041382800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780143039950",
    title: "The Odyssey",
    author: "Homer, Robert Fagles, Bernard Knox",
    dateOfRelease: -7889266800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780156012200",
    title: "Le Petit Prince",
    author: "Richard Howard, Dom Marcos Barbosa, Melina Karakosta",
    dateOfRelease: -757378800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780743247540",
    title: "The Glass Castle",
    author: "Jeannette Walls",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780385486800",
    title: "Into the Wild",
    author: "Jon Krakauer",
    dateOfRelease: 820458000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780141439600",
    title: "A Tale of Two Cities",
    author: "Charles Dickens, Richard Maxwell, Hablot Knight Browne",
    dateOfRelease: -3502825200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307348140",
    title: "Jurassic Park",
    author: "Michael Crichton",
    dateOfRelease: 631155600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780060256650",
    title: "The Giving Tree",
    author: "Shel Silverstein",
    dateOfRelease: -189385200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780385338610",
    title: "A Time to Kill",
    author: "John Grisham",
    dateOfRelease: 599619600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780374500020",
    title: "Un di Velt Hot Geshvign",
    author: "Elie Wiesel, Marion Wiesel",
    dateOfRelease: -378687600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780142414930",
    title: "Paper Towns",
    author: "John Green",
    dateOfRelease: 1199149200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780345418260",
    title: "The Princess Bride",
    author: "William Goldman",
    dateOfRelease: 94698000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780140385720",
    title: "The Outsiders",
    author: "S.E. Hinton",
    dateOfRelease: -94690800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780385737940",
    title: "The Maze Runner",
    author: "James Dashner",
    dateOfRelease: 1230771600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780061234000",
    title:
      "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
    author: "Steven D. Levitt, Stephen J. Dubner",
    dateOfRelease: 1104541200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780517189600",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    dateOfRelease: -1861916400000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780060531040",
    title: "One Hundred Years of Solitude",
    author: "Gregory Rabassa",
    dateOfRelease: -94690800000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780375751520",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde, Jeffrey Eugenides",
    dateOfRelease: -2492982000000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780345803500",
    title: "Fifty Shades Freed",
    author: "E.L. James",
    dateOfRelease: 1325379600000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780393970130",
    title: "Dracula",
    author: "Bram Stoker, Nina Auerbach, David J. Skal",
    dateOfRelease: -2303593200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9780307269980",
    title: "Flickan som lekte med elden",
    author: "Stieg Larsson, Reg Keeland",
    dateOfRelease: 1136077200000,
    numberOfCopies: 5,
    availableCopies: 5
  },
  {
    isbn: "9781612130580",
    title: "Fifty Shades Darker",
    author: "E.L. James",
    dateOfRelease: 1293843600000,
    numberOfCopies: 5,
    availableCopies: 5
  }
];
