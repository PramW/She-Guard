import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonPopover, ModalController } from '@ionic/angular';

import { format } from 'date-fns';
import { id } from 'date-fns/locale';
// import { chain } from 'lodash';

// import { FormDetailComponent } from 'src/app/components/form-detail/form-detail.component';
// import { HttpService } from 'src/app/services/http/http.service';
// import { SharedService, UserData } from 'src/app/services/shared/shared.service';
// import { UtilsService } from 'src/app/services/utils/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-safety-patrol',
  templateUrl: './safety-patrol.page.html',
  styleUrls: ['./safety-patrol.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SafetyPatrolPage implements OnInit {
  // isDarkMode: boolean;
  // user: UserData;
  // urlPath: string;
  // keyword: string;
  customDate: {
    minDate: string;
    modelDate: string;
    selectedDate: string;
  };

  jadwalShift: {
    data: any[];
    isLoading: boolean;
  };
  dataSource: any[];

  calendar!: {
    date: Date;
    daysInLastMonth: any[];
    daysInThisMonth: any[];
    daysInNextMonth: any[];
    title: string;
  };

  year: string;
  dateNow: string;

  selectedDate: any;

  constructor() {
    // this.isDarkMode = this.shared.isDarkMode;
    // this.user = this.shared.user;

    // const fullDate = this.utils.formatDateNow(Date.now(), 'yyyy-MM-dd');
    // this.urlPath = `${environment.url.shiftPerDay}?date=${fullDate}&pegawaiApproveId=${this.user.pegawaiId}`;

    this.jadwalShift = {
      data: [],
      isLoading: true,
    };
    this.dataSource = [];

    // this.keyword = '';
    this.customDate = {
      minDate: new Date().toISOString(),
      modelDate: new Date().toISOString(),
      selectedDate: new Date().toISOString(),
    };

    this.calendar = {
      date: new Date(),
      daysInLastMonth: [],
      daysInThisMonth: [],
      daysInNextMonth: [],
      title: '',
    };

    this.year = format(Date.now(), 'yyyy');
    this.dateNow = format(Date.now(), 'dd MMMM yyyy', { locale: id });

    this.selectedDate = {};
  }

  ngOnInit() {}

  ionViewWillEnter() {
    // if (this.user.role?.includes('app.shift.change')) {
    //   this.getShiftSchedule(this.urlPath);
    // } else {
    this.getJadwalShift(format(Date.now(), 'MM-yyyy'));
    // }
  }

  // doRefresh(event) {
  //   if (this.user.role?.includes('app.shift.change')) {
  //     this.getShiftSchedule(this.urlPath)
  //       .finally(() => event.target.complete());
  //   } else {
  //     this.getJadwalShift(format(Date.now(), 'MM-yyyy'))
  //       .finally(() => event.target.complete());
  //   }
  // }

  // onClear() {
  //   this.keyword = '';
  //   this.jadwalShift.isLoading = true;
  //   delete this.dataSource;
  //   delete this.jadwalShift.data;
  //   this.getShiftSchedule(this.urlPath);
  // }

  // onSearch(event?: any) {
  //   if (event) {
  //     this.keyword = event.detail.value;
  //   }
  //   this.jadwalShift.data = this.dataSource?.filter?.(sft => {
  //     const keyword = this.keyword.toLowerCase();
  //     const matchNamaLengkap = sft?.namaLengkap?.toLowerCse?.().includes(keyword);
  //     const matchNamaShift = sft?.namaShift?.toLowerCase?.().includes(keyword);

  //     return matchNamaLengkap || matchNamaShift;
  //   });

  //   if (!this.keyword) {
  //     this.onClear();
  //   }
  // }

  // async selectFilter(str, popover?: IonPopover) {
  //   delete this.dataSource;
  //   delete this.jadwalShift.data;

  //   if (str === 'custom') {
  //     if (this.customDate.selectedDate) {
  //       this.customDate.selectedDate = this.customDate.modelDate;
  //     }

  //     const fullDate = this.utils.formatDate(this.customDate.selectedDate, 'yyyy-MM-dd');
  //     const setUrlByTipeShift = `${environment.url.shiftPerDay}?date=${fullDate}&pegawaiApproveId=${this.user.pegawaiId}`;
  //     this.urlPath = setUrlByTipeShift;

  //     this.jadwalShift.isLoading = true;
  //     this.getShiftSchedule(this.urlPath);
  //     await popover.dismiss();
  //   }
  // }

  // async getShiftSchedule(urlPath) {
  //   try {
  //     const response = await this.http.getAnyData(urlPath);

  //     if (![200, 201].includes(response.status)) {
  //       throw response;
  //     }

  //     const filterData = chain(response.data?.data)
  //       .groupBy('namaShift')
  //       .map((shift) => ({
  //         namaShift: shift[0]?.namaShift,
  //         jamMulai: shift[0]?.jamMulai,
  //         jamSelesai: shift[0]?.jamSelesai,
  //         inisial: shift[0]?.inisial,
  //         shift
  //       })).value();
  //     this.jadwalShift.data = filterData;
  //     this.dataSource = filterData;
  //   } catch (err) {
  //     this.utils.createToast(this.http.getErrorMessage(err));
  //     this.jadwalShift.data = [];
  //   } finally {
  //     this.jadwalShift.isLoading = false;
  //   }
  // }

  // async presentModal(data: any) {
  //   const loader = await this.utils.presentLoader();

  //   const result = Object.assign(data, { title: 'jadwalShift' });

  //   if (!this.utils.modalOpen) {
  //     this.utils.modalOpen = true;
  //     const modal = await this.modalCtrl.create({
  //       component: FormDetailComponent,
  //       componentProps: {
  //         data: result,
  //         selectedDate: this.customDate.selectedDate
  //       },
  //       backdropDismiss: false,
  //       breakpoints: [1],
  //       initialBreakpoint: 1,
  //       cssClass: 'custom-modal',
  //       mode: 'ios',
  //     });
  //     modal.onDidDismiss().then((modalDismissValue) => {
  //       const isApproveModal = modalDismissValue?.data?.isApproveModal;
  //       if (isApproveModal) {
  //         delete this.jadwalShift.data;
  //         delete this.dataSource;
  //         this.jadwalShift.isLoading = true;

  //         this.getShiftSchedule(this.urlPath);
  //       }
  //     });

  //     return await modal.present().then(() => loader.dismiss());
  //   }
  // }

  // // Store methods for personal shift display

  selectDate(item: any) {
    this.selectedDate.selected = false;

    this.selectedDate = item;
    this.selectedDate.selected = true;

    this.calendar.date = new Date(
      this.calendar.date.getFullYear(),
      this.calendar.date.getMonth(),
      this.selectedDate.date
    );
  }

  showLastMonth(item?: any) {
    let date = item?.date;

    if (date == null) {
      const maxDate = new Date(
        this.calendar.date.getFullYear(),
        this.calendar.date.getMonth(),
        0
      ).getDate();

      date =
        this.calendar.date.getDate() > maxDate
          ? maxDate
          : this.calendar.date.getDate();
    }

    this.showCalendar(
      new Date(
        this.calendar.date.getFullYear(),
        this.calendar.date.getMonth() - 1,
        date
      )
    );

    const monthYear = new Date(
      this.calendar.date.getFullYear(),
      this.calendar.date.getMonth()
    );

    this.jadwalShift.isLoading = true;
    // this.getJadwalShift(format(monthYear, 'MM-yyyy'));
  }

  showNextMonth(item?: any) {
    let date = item?.date;

    if (date == null) {
      const maxDate = new Date(
        this.calendar.date.getFullYear(),
        this.calendar.date.getMonth() + 2,
        0
      ).getDate();

      date =
        this.calendar.date.getDate() > maxDate
          ? maxDate
          : this.calendar.date.getDate();
    }

    this.showCalendar(
      new Date(
        this.calendar.date.getFullYear(),
        this.calendar.date.getMonth() + 1,
        date
      )
    );

    const monthYear = new Date(
      this.calendar.date.getFullYear(),
      this.calendar.date.getMonth()
    );

    this.jadwalShift.isLoading = true;
    this.getJadwalShift(format(monthYear, 'MM-yyyy'));
  }

  async getJadwalShift(monthYear: string) {
    // try {
    //   const urlPath = `${environment.url.jadwalShift}?pegawaiId=${this.user.pegawaiId}&monthYear=${monthYear}`;
    //   const response = await this.http.getAnyData(urlPath);

    //   if (![200, 201].includes(response.status)) {
    //     throw response;
    //   }

    //   this.jadwalShift.data = response.data?.data;
    // } catch (err) {
    //   this.utils.createToast(this.http.getErrorMessage(err));

    //   this.jadwalShift.data = [];
    // } finally {
    //   this.jadwalShift.isLoading = false;

    //   if (this.calendar.date === null) {
    //     const now = this.utils.getTime();
    //     this.calendar.date = new Date(now);
    //   }

    this.showCalendar(this.calendar.date);
    // }
  }

  private showCalendar(date: Date) {
    try {
      this.calendar.date = date;
      this.calendar.daysInLastMonth = [];
      this.calendar.daysInThisMonth = [];
      this.calendar.daysInNextMonth = [];
      this.calendar.title = format(date, 'MMMM', { locale: id });

      const firstDayOnThisMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ).getDay();

      const lastDayOnThisMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();

      const prevMonthDays = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();

      const thisMonthDays = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();

      for (
        let i = prevMonthDays - (firstDayOnThisMonth - 1);
        i <= prevMonthDays;
        i++
      ) {
        const initDate = new Date(date.getFullYear(), date.getMonth() - 1, i);

        this.calendar.daysInLastMonth.push({
          date: i,
          label: format(initDate, 'd MMMM yyyy', { locale: id }),
          schedules: [],
          hasUploaded: false,
          hasUnuploaded: false,
          hasUnscanned: false,
          selected: false,
        });
      }

      for (let i = 1; i <= thisMonthDays; i++) {
        const initDate = new Date(date.getFullYear(), date.getMonth(), i);
        const label = format(initDate, 'dd MMMM yyyy', { locale: id });
        const initFormat = format(initDate, 'yyyy-MM-dd');

        const shiftsPerDate = this.jadwalShift.data?.filter(
          (shift) => shift.tglShift === initFormat
        );

        this.calendar.daysInThisMonth.push({
          date: i,
          label,
          shifts: shiftsPerDate,
          selected: false,
        });
      }

      for (let i = 1; i <= 6 - lastDayOnThisMonth; i++) {
        const initDate = new Date(date.getFullYear(), date.getMonth() + 1, i);

        this.calendar.daysInNextMonth.push({
          date: i,
          label: format(initDate, 'd MMMM yyyy', { locale: id }),
          shifts: [],
          hasUploaded: false,
          hasUnuploaded: false,
          hasUnscanned: false,
          selected: false,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.selectedDate = this.calendar.daysInThisMonth.find(
        (item) => item.date === date.getDate()
      );

      if (this.selectedDate) {
        this.selectedDate.selected = true;
      }
    }
  }
}
