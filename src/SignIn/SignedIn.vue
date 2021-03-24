<template>
  <v-container fluid>
    <v-parallax
      class="frontpage_parallax_website"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/IMG_20150531_151146.jpg?alt=media&token=1d7ea23b-fd36-4cbb-807f-e6f7c8d66c41"
    >
    </v-parallax>
    <img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/IMG_20150531_151146.jpg?alt=media&token=1d7ea23b-fd36-4cbb-807f-e6f7c8d66c41"
      alt=""
    />
    <!-- Spacer -->
    <br />
    <br />
    <br />
    <!-- End spacer -->
    <v-btn @click.prevent="signOut">Sign out</v-btn>
    <br />
    <br />
    <h1>Greenlandic cities</h1>
    <div>
      <!-- Create a new city -->
      <el-popover
        placement="bottom"
        title="New City"
        width="200"
        trigger="click"
      >
        <el-input placeholder="City Name" v-model="name"></el-input>
        <el-input placeholder="Population" v-model="population"></el-input>
        <el-input
          placeholder="Image"
          v-model="image"
          @blur="createCity(name, population, image)"
        ></el-input>
        <el-button round slot="reference" type="success"
          >Add New City</el-button
        >
      </el-popover>
      <!-- Show content from database -->
      <el-table
        :data="
          citiesData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 60%; margin: 0 auto"
        class="table_cities"
      >
        <el-table-column min-width="55" prop="image" label="Image">
          <template slot-scope="scope">
            <img v-img :src="scope.row.image" />
          </template>
        </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Population" prop="population">
        </el-table-column>

        <!-- Edit content -->
        <el-table-column align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"
            />
          </template>
          <template slot-scope="scope">
            <el-popover
              placement="bottom"
              title="Edit City"
              width="200"
              trigger="click"
            >
              <el-input
                placeholder="City name"
                v-model="scope.row.name"
                @blur="
                  updateCity(
                    scope.row.id,
                    scope.row.name,
                    scope.row.population,
                    scope.row.image
                  )
                "
              ></el-input>
              <el-input
                placeholder="Population"
                v-model="scope.row.population"
                @blur="
                  updateCity(
                    scope.row.id,
                    scope.row.name,
                    scope.row.population,
                    scope.row.image
                  )
                "
              ></el-input>
              <el-input
                placeholder="Image"
                v-model="scope.row.image"
                @blur="
                  updateCity(
                    scope.row.id,
                    scope.row.name,
                    scope.row.population,
                    scope.row.image
                  )
                "
              ></el-input>
              <el-button size="mini" slot="reference">Edit</el-button>
            </el-popover>
            <!-- Delete content -->
            <el-button
              size="mini"
              type="danger"
              @click="deleteCity(scope.row.id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();

export default {
  name: "SignedIn",
  data() {
    return {
      name: "",
      citiesData: [],
      population: "",
      search: "",
      image: "",
    };
  },
  methods: {
    createCity(name, population, image) {
      if (name != "") {
        db.collection("Cities")
          .add({ name: name, population: population, image: image })
          .then(() => {
            console.log("Document successfully written!");
            this.readCity();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        this.name = "";
      }
    },
    readCity() {
      this.citiesData = [];
      db.collection("Cities")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.citiesData.push({
              id: doc.id,
              name: doc.data().name,
              population: doc.data().population,
              image: doc.data().image,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateCity(id, name, population, image) {
      db.collection("Cities")
        .doc(id)
        .update({
          name: name,
          population: population,
          image: image,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.readCity();
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteCity(id) {
      db.collection("Cities")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readCity();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
  },
  mounted() {
    this.readCity();
  },
};
</script>

<style>
.container--fluid {
  padding: 0;
}
img {
  width: 90%;
}
.playbutton {
  width: 40px;
  border: none;
  background: none;
}
.card {
  margin: 50px 0px;
  width: 250px;
  display: inline-block;
}

/* Parallax + media query image*/
.top_image_mobile {
  display: none;
}
@media only screen and (max-width: 600px) {
  .v-parallax {
    display: none;
  }
  .frontpage_parallax_website {
    display: none;
  }
  .top_image_mobile {
    display: block;
    width: 100%;
  }
  .table_cities {
    width: 100% !important;
  }
}
</style>